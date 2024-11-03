import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import dicomParser from 'dicom-parser';
import cornerstone from 'cornerstone-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder } from '@fortawesome/free-regular-svg-icons';
import { Chart, registerables } from 'chart.js';
import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import { faTableCells, faTableList } from '@fortawesome/free-solid-svg-icons';

function Getdata() {
	const [file, setfile] = useState(null);
	const [dicomfile, setdicomfile] = useState(null);
	const [imageid, setimageid] = useState("");
	const [csvfile, setcsvfile] = useState(null);
	const [folders, setfolders] = useState({});
	const [filename, setfilename] = useState("");
	const [currentPage, setcurrentPage] = useState(0);
	const rowsPerPage = 15;

	useEffect(() => {// render img
		// ตั้งค่า Cornerstone
		cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
		cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

		// ดึงรายการไฟล์จากเซิร์ฟเวอร์
		axios.get('http://localhost:4000/allfile')
			.then(response => {
				const transformedData = response.data.map(file => ({
					...file,
					size: Number(file.size) || 0,
				}));
				setfile(transformedData);
			})
			.catch(error => {
				console.error('Error fetching files: ', error);
			});
	}, []);

	useEffect(() => {
		const element = document.getElementById("dicomImage");
		if (imageid && element) {
			const element = document.getElementById("dicomImage");
			cornerstone.enable(element);

			cornerstone.loadImage(imageid)
				.then(image => {
					cornerstone.displayImage(element, image);
				})
				.catch(error => {
					console.error('Error loading image: ', error);
				});
		}
	}, [imageid]);

	const showtree = (node, currentpath = '') => {
		if (!node) {
			return null;
		}
		return (
			<ul className=" pl-4 max-h-[13rem] overflow-y-auto">
				{node.map((item, index) => {
					const path = `${currentpath}/${item.name}`;
					if (item.type === 'folder') {
						return (
							<li key={index} className="text-[0.9rem]">
								<FontAwesomeIcon icon={faFolder} style={{ color: "black", width: '7%', height: '0%', marginRight: "2%" }} />
								<span
									className="cursor-pointer text-gray-500"
									onClick={() => setfolders(prev => ({ ...prev, [path]: !prev[path] }))}>
									{item.name}
								</span>
								{folders[path] && (
									<div className="ml-4">
										{showtree(item.contents, path)}
									</div>
								)}
							</li>
						);
					} else if (item.type === 'file') {
						return (
							<li key={index} className="text-[0.9rem]">
								{dicomfile ? (<FontAwesomeIcon icon={faFile} style={{ color: "black", width: '5%', height: '0%', marginRight: "2%" }} />)
									: <FontAwesomeIcon icon={faTableList} style={{ color: "black", width: '7%', height: '0%', marginRight: "2%" }} />}
								<span className="cursor-pointer text-gray-500" onClick={() => fileselect(path)}>
									{item.name}
								</span>
							</li>
						);
					}
					return null;
				})}
			</ul>
		);
	};

	const fileselect = (filepath) => {
		setfilename(filepath);
		const clickdicom = filepath.endsWith('.dcm');
		const clickcsv = filepath.endsWith('.csv');

		if (clickdicom) {
			setcsvfile(null); // ล้างค่า CSV ถ้ามีการเลือก DICOM
			const fileURL = `http://localhost:4000/dicomfile?file=${filepath}`;
			axios.get(fileURL, { responseType: 'arraybuffer' })
				.then(response => {
					setcsvfile(null)
					const bytearray = new Uint8Array(response.data);
					const setdata = dicomParser.parseDicom(bytearray);
					setdicomfile(setdata);
					setimageid(`wadouri:${fileURL}`);
				})
				.catch(error => {
					console.error('Error fetching DICOM file: ', error);
				});
		} else if (clickcsv) {
			setdicomfile(null); // ล้างค่า DICOM ถ้ามีการเลือก CSV
			const fileURL = `http://localhost:4000/csvfile?file=${filepath}`;
			axios.get(fileURL)
				.then(response => {
					Papa.parse(response.data, {
						header: true,
						complete: (result) => {
							setcsvfile(result.data); // ตั้งค่า csvfile
							setimageid("");
						},
						error: (error) => {
							console.error('Error parsing CSV file: ', error);
						}
					});
				})
				.catch(error => {
					console.error('Error fetching CSV file: ', error);
				});
		}
	};

	const totalPages = csvfile ? Math.ceil(csvfile.length / rowsPerPage) : 0;

	Chart.register(...registerables); // Register necessary components

	const ChartColumn = ({ values }) => {
		const canvasRef = useRef(null);

		useEffect(() => {
			const ctx = canvasRef.current.getContext('2d');
			const rowvalue = [25]; // ค่าที่ต้องการแสดงในกราฟ
			const label = '0.33 - 0.33'; // ป้ายชื่อของกราฟ

			const chart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: [label], // ป้ายชื่อสำหรับแกน x
					datasets: [{
						data: rowvalue,
						backgroundColor: '#3391C7',
					}],
				},
				options: {
					scales: {
						y: {
							ticks: {
								display: false // Hide the ticks on the Y-axis
							},
							grid: {
								display: false, // Hide the grid lines on the Y-axis
								borderColor: 'transparent',
							},
							title: {
								display: false // Optionally hide the Y-axis title if needed
							}
						},
						x: {
							grid: {
								display: false // ซ่อนเส้นกริดในแกน X
							}
						}
					},
					plugins: {
						legend: {
							display: false // ปิดการแสดง legend
						}
					}
				},
			});

			return () => {
				chart.destroy();
			};
		}, [values]);

		return <canvas ref={canvasRef} width="130" height="80"></canvas>;
	};

	const ChartSomuch = ({ data }) => {
		const canvasRef = useRef(null);

		useEffect(() => {
			const ctx = canvasRef.current.getContext('2d');

			// Function to bin the data
			const binData = (data, numberOfBins) => {
				const bins = Array(numberOfBins).fill(0);
				const minValue = Math.min(...data);
				const maxValue = Math.max(...data);
				const binSize = (maxValue - minValue) / numberOfBins;

				data.forEach(value => {
					const binIndex = Math.min(Math.floor((value - minValue) / binSize), numberOfBins - 1);
					bins[binIndex] += 1; // Increment count for each bin
				});

				return bins.map((count, index) => ({
					bin: (minValue + index * binSize).toFixed(2) + ' - ' + (minValue + (index + 1) * binSize).toFixed(2),
					count,
				}));
			};

			const binnedData = binData(data, 10);
			const labels = binnedData.map(item => item.bin);
			const counts = binnedData.map(item => item.count);
			const mindata = labels[0];
			const maxdata = labels[labels.length - 1];

			const chart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels,
					datasets: [{
						label: 'Frequency', // Optional label for the dataset
						data: counts,
						backgroundColor: '#3391C7',
					}],
				},
				options: {
					scales: {
						y: {
							ticks: {
								display: false,
							},
							grid: {
								display: false,
								borderColor: 'transparent',
							},
							title: {
								display: false,
							},
						},
						x: {
							title: {
								display: true,
								text: `${mindata}`,
							},
							beginAtZero: true,
							ticks: {
								autoSkip: false,
								display: false,
							},
							grid: {
								display: false,
								borderColor: 'transparent',
							},
						},
					},
					plugins: {
						tooltip: {
							enabled: true,
						},
						legend: {
							display: false,
						},
					},
					barPercentage: 1.0,
					categoryPercentage: 1.0,
				},
			});

			return () => {
				chart.destroy();
			};
		}, [data]);

		return <canvas ref={canvasRef} width="200" height="90"></canvas>;
	};

	const displayCSVRows = () => {
		if (!csvfile) return null;

		const startIndex = currentPage * rowsPerPage;
		const selectedRows = csvfile.slice(startIndex, startIndex + rowsPerPage);
		const dataKeys = Object.keys(csvfile[0]);
		// const dataKeys = [Object.keys(csvfile[0])[0]];
		console.log(dataKeys);
		const rowvalue = csvfile.length - 1;

		// Process the CSV data
		const processedCSV = csvfile.map(row => {
			let processedRow = {};
			dataKeys.forEach(header => {
				const val = row[header];
				processedRow[header] = !isNaN(parseFloat(val)) && isFinite(val) ? parseFloat(val) : val;
			});
			return processedRow;
		});

		const renderHeader = (header, index) => {
			let value = processedCSV.map(row => row[header]);

			const numvalue = value.filter(val => typeof val === 'number');
			const stringValue = value.filter(val => typeof val === 'string');

			let headerContent;

			if (numvalue.length > 0) {
				if (numvalue.length >= 20 && numvalue.length <= 30) {
					headerContent = (
						<div className=''>
							<ChartColumn data={rowvalue} />
						</div>
					);
				} else if (numvalue.length < 10) {
					headerContent = (
						<div className='flex flex-col items-center justify-center'>
							<p className='text-[1rem] font-extrabold'>{rowvalue}</p>
							<p className='text-[.8rem] font-bold'>total values</p>
						</div>
					);
				} else if (numvalue.length > 30) {
					headerContent = (
						<div className='pb-[6rem] pt-[6rem]'>
							<ChartSomuch data={numvalue} />
						</div>
					);
				}
			} else if (stringValue.length <= 30) {
				headerContent = (
					<div className='flex flex-col items-center justify-center'>
						<p className='text-[1rem] font-extrabold'>{rowvalue}</p>
						<p className='text-[.8rem] font-bold'>unique values</p>
					</div>
				);
			} else if (stringValue.length > 30) {
				const valueCounts = stringValue.reduce((acc, val) => {
					acc[val] = (acc[val] || 0) + 1;
					return acc;
				}, {});

				const sortedValues = Object.entries(valueCounts).sort((a, b) => b[1] - a[1]);
				const topValue1 = sortedValues[0];
				const topValue2 = sortedValues[1] || ["Other", 0];
				const total = stringValue.length;

				const topValue1Percentage = ((topValue1[1] / total) * 100).toFixed(2);
				const topValue2Percentage = ((topValue2[1] / total) * 100).toFixed(2);
				const otherPercentage = (100 - topValue1Percentage - topValue2Percentage).toFixed(2);

				headerContent = (
					<div className='flex flex-col text-[.8rem] w-[14rem] justify-center items-center'>
						<p>{topValue1[0]}: {topValue1Percentage}%</p>
						{topValue2[0] !== "Other" && <p>{topValue2[0]}: {topValue2Percentage}%</p>}
						{sortedValues.length > 2 && <p className='text-gray-500'>Other: {otherPercentage}%</p>}
					</div>
				);
			}

			return (
				<th key={index} className="pr-[1rem] border border-gray-300 pb-[1rem]">
					<div className='flex flex-row text-[0.8rem] border-b border-gray-300'>
						{header}
					</div>
					<div className='flex flex-col h-[4rem] w-[100%] justify-center mt-[1rem]'>
						{headerContent}
					</div>
				</th>
			);
		};

		return (
			<table className=''>
				<thead>
					<tr className=''>
						{dataKeys.map(renderHeader)}
					</tr>
				</thead>
				<tbody className=''>
					{selectedRows.map((row, rowIndex) => (
						<tr key={rowIndex} className="border-b">
							{dataKeys.map((key, colIndex) => {
								let value = row[key];
								return (
									<td key={colIndex} className="px-2 py-1 max-w-[13rem] overflow-x-auto text-center">
										{typeof value === 'string' ? value : value}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages - 1) {
			setcurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 0) {
			setcurrentPage(currentPage - 1);
		}
	};

	const getDicomMetadata = () => {
		if (!dicomfile) return [];

		const elements = dicomfile.elements;
		const metadata = [];

		for (let tag in elements) {
			if (elements.hasOwnProperty(tag)) {
				const element = elements[tag];
				let value = 'N/A';

				try {
					value = dicomfile.string(tag) || 'N/A';
				} catch (error) {
					value = 'Binary Data';
				}

				metadata.push({
					tag: tag,
					name: tag.toLowerCase(),
					value: value,
				});
			}
		}

		return metadata;
	};

	return (
		<div className='h-[auto]'>
			<h2 className="text-[1.2rem] mb-[2%] font-extrabold">{filename || "No file selected"}</h2>
			<hr className='border-[0.5px] mt-[1%] mb-[2%] border-gray-300' />
			<div className="flex h-[auto]">
				<div className='flex space-x-[14rem]'>
					<div className="flex flex-row gap-[2%] w-[40rem]">
						{csvfile ?
							<div className='max-h-[40rem] overflow-y-auto w-[80rem]'>
								<table className="text-left text-sm text-gray-700">
									<tbody>
										{displayCSVRows()}
									</tbody>
								</table>
								{totalPages > 1 && (
									<div className="flex justify-between mt-[2%] mb-[2%]">
										<button onClick={handlePreviousPage} disabled={currentPage === 0} className="w-[7rem] rounded-lg bg-gray-200 ">Previous</button>
										<button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className=" w-[7rem] px-4 py-2 rounded-lg bg-cyan-500 text-white">Next</button>
									</div>
								)}
							</div>
							: <div className='flex flex-row gap-2'>
								<div id="dicomImage" className='w-[auto] h-[auto]' style={{ height: '25rem', position: 'relative' }}></div>
								{dicomfile != null && (<>
									<table className="text-left text-sm text-gray-700">
										<thead>
											<tr>
												<th className="px-2 py-1 font-medium">Name</th>
												<th className="px-2 py-1 font-medium">Data</th>
											</tr>
										</thead>
										<tbody>
											{getDicomMetadata().map((data, index) => (
												<tr key={index} className="border-b">
													<td className="px-2 py-1 font-medium max-w-[10rem] overflow-x-auto">{data.tag}</td>
													<td className="px-2 py-1 max-w-[18rem] overflow-x-auto">{data.value}</td>
												</tr>
											))}
										</tbody>
									</table>
								</>
								)}
							</div>}
					</div>
					<div className="w-[15rem]">
						<p className='text-[1rem] font-bold mb-[2%]'>Data Explorer</p>
						<p className='text-[.9rem] mb-[2%]'>35.34 GB</p>
						<div className=''>
							{file && showtree(file)}
						</div>
						<hr className='border-[0.5px] mt-[1%] mb-[2%] border-gray-300' />
						<p className='text-[1rem] font-bold mb-[2%]'>Summary</p>
						<div className='flex flex-row items-center gap-3'>
							<FontAwesomeIcon icon={faFolder} style={{ color: "black", width: '7%', height: '0%', marginRight: "2%" }} />
							<p className='text-[.9rem]'>147k files</p>
						</div>
						<div className='flex flex-row items-center gap-3'>
							<FontAwesomeIcon icon={faTableList} style={{ color: "black", width: '7%', height: '0%', marginRight: "2%" }} />
							<p className='text-[.9rem]'>43 colums</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Getdata;
