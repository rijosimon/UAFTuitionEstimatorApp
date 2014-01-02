function graphGenerator(var numOfSemesters, var storeAlternateFee, var uafTuition, var yourPlanName, var credPerSem, var uafFee, var nonUAFSeriesName, var nationalAveT, var nationalAveFee )
{

	var chart1;   //Stores the chart to be displayed comparing national average and UAF costs. 	
	var storeNames = new Array();
	
	//When national average is not requested.
 
 if(document.getElementById('natAve').checked == false)
  	{
  		// 4, 5, 6, 7, 8 - Years
  		// When national average is not requested.
  		
  	 	if(numOfSemesters == 8 || numOfSemesters == 10 || numOfSemesters == 12 || numOfSemesters == 14 || numOfSemesters == 16)
  	 	{
  	 		var seriesName = Math.ceil(numOfSemesters/2.0)+' - Year Plan. (Your Choice)';
  	 		if(numOfSemesters == 8)
  	 		{
  	 			storeNames[0] = seriesName;
  	 			storeNames[1] = '5-year plan';
  	 			storeNames[2] = '6-year plan';
  	 			storeNames[3] = '7-year plan';
  	 			storeNames[4] = '8-year plan';
  	 		}	
  	 		else if(numOfSemesters == 10)
  	 		{
  	 			storeNames[0] = '4-year plan';
  	 			storeNames[1] = seriesName;
  	 			storeNames[2] = '6-year plan';
  	 			storeNames[3] = '7-year plan';
  	 			storeNames[4] = '8-year plan';
  	 		}
  	 		else if(numOfSemesters == 12)
  	 		{
  	 			storeNames[0] = '4-year plan';
  	 			storeNames[1] = '5-year plan';
  	 			storeNames[2] = seriesName;
  	 			storeNames[3] = '7-year plan';
  	 			storeNames[4] = '8-year plan';
  	 		}
  	 		else if(numOfSemesters == 14)
  	 		{
  	 			storeNames[0] = '4-year plan';
  	 			storeNames[1] = '5-year plan';
  	 			storeNames[2] = '6-year plan';
  	 			storeNames[3] = seriesName;
  	 			storeNames[4] = '8-year plan';
  	 		}
  	 		else if(numOfSemesters == 16)
  	 		{
  	 			storeNames[0] = '4-year plan';
  	 			storeNames[1] = '5-year plan';
  	 			storeNames[2] = '6-year plan';
  	 			storeNames[3] = '7-year plan';
  	 			storeNames[4] = seriesName;
  	 		}
  	 		
  	 		$(document).ready(function () {
		     	chart1 = new Highcharts.Chart({
         		chart: {
          				   renderTo: 'chartBox',
			               type: 'bar'
         			   },		
				title: {	
		                  text: 'Cost Comparison'
          			   },
	            xAxis: {
    		              categories: [storeNames[0], storeNames[1], storeNames[2], storeNames[3], storeNames[4]]
            		   },
               yAxis: {
             		   title: {
                    			text: 'Cost (in dollars)'
                			  }				 
            		  },
              legend: {
               			 backgroundColor: '#FFFFFF'
         		      },
              plotOptions: {
                		bar: {
                    			stacking: 'normal',
                    		    dataLabels: {
                            					enabled: true,
                            					format: "$ {point.y:,.0f}",
                            					color: '#FFF000'
                            	    		}
                      		 }
            				},
              series: [{
                			name: 'Tuition',
	                    	data: [Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)] 
            		   }, 
            		   {
		                	name: 'Other Cost',
	        		        data: [Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2]), Math.ceil(storeAlternateFee[3]), Math.ceil(storeAlternateFee[4])]
            		   }]
    			}); //CLOSING: Highcharts.Chart
 			}); //CLOSING: Ready Function
  	 } // CLOSING: 4, 5, 6, 7, 8 - Years
  	   // When national average is not requested.
  
  	// 15 Credits
  	// When national average is not requested.
  
  	else if(credPerSem == 15)
  	 	{
  	 		$(document).ready(function () {
     		 chart1 = new Highcharts.Chart({
         	 chart: {
             renderTo: 'chartBox',
             type: 'bar'
         			},		
		
			 title: {
                		text: 'Cost Comparison'
           	 		},
             xAxis: {
	                	categories: [yourPlanName, '9 cred/sem Plan', '12 cred/sem Plan']
            		},
            yAxis: {           
                	title: {
                    			text: 'Cost (in dollars)'
                		   }
            	   },
            legend: {
                		backgroundColor: '#FFFFFF'
            		},
            plotOptions: {
                		bar: {
	                    stacking: 'normal',
    	                dataLabels: {
        	                    enabled: true,
        	                    format: "$ {point.y:,.0f}",
                	            color: '#FFF000'
                            		}
                        	}
            			},
            series: [{
                name: 'Tuition',
                data: [Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
            }, 
            {
                name: 'Other Cost',
                data: [Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
            }]
	     }); //CLOSING: Highcharts.Chart
 	}); //CLOSING: Ready Function
  } // CLOSING: 15 Credits
    // When national average is not requested.	
    
    // 12 Credits
  	// When national average is not requested.
  	
  	else if(credPerSem == 12)
  	 	{
  	 		$(document).ready(function () {
     		 chart1 = new Highcharts.Chart({
         	 chart: {
             renderTo: 'chartBox',
             type: 'bar'
         		},		
		
			title: {	
	                text: 'Cost Comparison'
    	           },
            xAxis: {
           	        categories: [yourPlanName, '9 cred/sem Plan', '15 cred/sem Plan']
            	   },
            yAxis: {
                	title: {
                    	text: 'Cost (in dollars)'
                		   }
            	   },
            legend: {
                backgroundColor: '#FFFFFF'
            		},
            plotOptions: {
                	bar: {
                    		stacking: 'normal',
                            dataLabels: {
                                			enabled: true,
                                			format: "$ {point.y:,.0f}",
		                                	color: '#FFF000'
        		                        }
                         }
            },
            series: [{
                		name: 'Tuition',
		                data: [Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
            }, 
            {
             		   name: 'Other Cost',
                	   data: [Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
            		}]
     		}); //CLOSING: Highcharts.Chart
 		}); //CLOSING: Ready Function
  	} // CLOSING: 12 Credits
      // When national average is not requested.

  // 9 Credits
  // When national average is not requested.    
  
  else if(credPerSem == 9)
  	 	{
  	 		$(document).ready(function () {
    		    chart1 = new Highcharts.Chart({
         		chart: {
             		renderTo: 'chartBox',
	                type: 'bar'
       				   },		
		
			title: {
                text: 'Cost Comparison'
            	   },
            xAxis: {
                		categories: [yourPlanName, '12 cred/sem Plan', '15 cred/sem Plan']
            	   },
            yAxis: {           
                		title: {
		                    		text: 'Cost (in dollars)'
                			   }
         		   },
            
            legend: {
                	backgroundColor: '#FFFFFF',
                	reversed: true
            		},
            plotOptions: {
	                	bar: {
                    		stacking: 'normal',
                            dataLabels: {
                                		enabled: true,
                                		format: "$ {point.y:,.0f}",
 		                               	color: '#FFF000'
                            			}
                        	}
            			},
            series: [{
                		name: 'Tuition',
                		data: [Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
            		  }, 
      			      {
                		name: 'Other Cost',
		                data: [Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
        		    }]
     		});  //CLOSING: Highcharts.Chart
 		});	//CLOSING: Ready Function	
  	} 	// CLOSING: 9 Credits
      	// When national average is not requested. 	 	
      	
     // Other Credits
     // When national average is not requested. 	
     
  	 else
  	 	{
  	 		$(document).ready(function () {
     			chart1 = new Highcharts.Chart({
         		chart: {
             			renderTo: 'chartBox',
		                type: 'bar'
         			   },		
		
				title: {	
	                   	text: 'Cost Comparison'
       			       },
            	xAxis: {
                	   	categories: [yourPlanName, '9 cred/sem Plan', '12 cred/sem Plan', '15 cred/sem Plan']
		               },
           		yAxis: {
		                title: {
        			            text: 'Cost (in dollars)'
                			   }
            		   },
	            legend: {
       		            backgroundColor: '#FFFFFF'
            			},
	            plotOptions: {
    			            bar: {
                		    stacking: 'normal',
                            dataLabels: {
		                                enabled: true,
		                                format: "$ {point.y:,.0f}",
        	                        	color: '#FFF000'
            		                    }
                    	        }
            				},
        series: [{
        	        name: 'Tuition',
            	    data: [Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
            	}, 
            	{
	                name: 'Other Cost',
                	data: [Math.ceil(uafFee), Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
            	}]
     		}); //CLOSING: Highcharts.Chart
		 });//CLOSING: Ready Function
  	 }	// CLOSING: Other Credits
      	// When national average is not requested.
      	
 } //CLOSING: When national average is not requested.
 
//When national average is requested.
 
else if(document.getElementById('natAve').checked == true)
{
		// 4, 5, 6, 7, 8 - Years
  		// When national average is requested.

		if(numOfSemesters == 8 || numOfSemesters == 10 || numOfSemesters == 12 || numOfSemesters == 14 || numOfSemesters == 16)
  	 	{
  	 	
  	 		var seriesName = Math.ceil(numOfSemesters/2.0)+' - Year Plan. (Your Choice)';
  	 		var storeNames = new Array();
  	 		if(numOfSemesters == 8)
  	 		{
  	 			storeNames[0] = seriesName;
  	 			storeNames[1] = '5-Year Plan';
  	 			storeNames[2] = '6-Year Plan';
  	 			storeNames[3] = '7-Year Plan';
  	 			storeNames[4] = '8-Year Plan';
  	 		}	
  	 		else if(numOfSemesters == 10)
  	 		{
  	 			storeNames[0] = '4-Year Plan';
  	 			storeNames[1] = seriesName;
  	 			storeNames[2] = '6-Year Plan';
  	 			storeNames[3] = '7-Year Plan';
  	 			storeNames[4] = '8-Year Plan';
  	 		}
  	 		else if(numOfSemesters == 12)
  	 		{
  	 			storeNames[0] = '4-Year Plan';
  	 			storeNames[1] = '5-Year Plan';
  	 			storeNames[2] = seriesName;
  	 			storeNames[3] = '7-Year Plan';
  	 			storeNames[4] = '8-Year Plan';
  	 		}
  	 		else if(numOfSemesters == 14)
  	 		{
  	 			storeNames[0] = '4-Year Plan';
  	 			storeNames[1] = '5-Year Plan';
  	 			storeNames[2] = '6-Year Plan';
  	 			storeNames[3] = seriesName;
  	 			storeNames[4] = '8-Year Plan';
  	 		}
  	 		else if(numOfSemesters == 16)
  	 		{
  	 			storeNames[0] = '4-Year Plan';
  	 			storeNames[1] = '5-Year Plan';
  	 			storeNames[2] = '6-Year Plan';
  	 			storeNames[3] = '7-Year Plan';
  	 			storeNames[4] = seriesName;
  	 		}
  	 		
  	 		$(document).ready(function () {
     			chart1 = new Highcharts.Chart({
         			chart: {
             			renderTo: 'chartBox',
		                type: 'bar'
         				    },		
		
					title: {			
		                text: 'Cost Comparison'
           				   },
		            xAxis: {
        			        categories: [nonUAFSeriesName, '4-Year Plan', '5-Year Plan', '6-Year Plan', '7-Year Plan', '8-Year Plan']
            			   },
		            yAxis: {
			                title: {
            				        text: 'Cost (in dollars)'
                				   }
            			   },
          
	                legend: {
        				        backgroundColor: '#FFFFFF'
            				},
		            plotOptions: {
        			        bar: {
                    		stacking: 'normal',
                            	dataLabels: {
                                	enabled: true,
                                	format: "$ {point.y:,.0f}",
                                	color: '#FFFFFF'
                            	}
                        	}
            			},
                series: [{
		                name: 'Tuition',
        		        data: [Math.ceil(nationalAveT), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)] 
            			 }, 
            			 {
		                name: 'Other Cost',
        		        data: [Math.ceil(nationalAveFee), Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2]), Math.ceil(storeAlternateFee[3]), Math.ceil(storeAlternateFee[4])]
            			 }]
     				}); //CLOSING: Highcharts.Chart
 				}); //CLOSING: Ready Function
  	 } // CLOSING: 4, 5, 6, 7, 8 - Years
      // When national average is not requested.
      
     // 15 Credits
     //When national average is requested. 
      
  	 else if(credPerSem == 15)
  	 	{
	  	 		$(document).ready(function () {
    					 chart1 = new Highcharts.Chart({
			         		chart: {
            			    renderTo: 'chartBox',
			                type: 'bar'
						           },		
		
						title: {
			                text: 'Cost Comparison'
            					},
			            xAxis: {
                			categories: ['National Average '+yourPlanName, yourPlanName, '9 cred/sem Plan', '12 cred/sem Plan']
            				   },
			            yAxis: {
			                title: {
                				    text: 'Cost (in dollars)'
				                   }
            					},            
			            legend: {
            				    backgroundColor: '#FFFFFF'
					            },
			            plotOptions: {
            					    bar: {
				                    stacking: 'normal',
                		            dataLabels: {
                        				        enabled: true,
                        				        format: "$ {point.y:,.0f}",
			                                	color:'#FFFFFF'
            					                }
                        				 }
							          },
            series: [{
            		    name: 'Tuition',
		                data: [Math.ceil(nationalAveT), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
        		     }, 
        			{
            		    name: 'Other Cost',
		                data: [Math.ceil(nationalAveFee), Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
		            }]
     			}); //CLOSING: Highcharts.Chart
		 }); //CLOSING: Ready Function
  	} 	// CLOSING: 15 Credits
       // When national average is not requested.
       
    // 12 Credits
    //When national average is requested.
        
  	else if(credPerSem == 12)
  	 	{
  	 			$(document).ready(function () {
     							chart1 = new Highcharts.Chart({
         						chart: {
             							renderTo: 'chartBox',
             							type: 'bar'
         								},		
		
								title: {
						                text: 'Cost Comparison'
							            },
					            xAxis: {
						                categories: ['National Average '+yourPlanName, yourPlanName, '9 cred/sem Plan', '15 cred/sem Plan']
							            },
					            yAxis: {
						                title: {
							                    text: 'Cost (in dollars)'
                							   }
							            },
            
					            legend: {
						                backgroundColor: '#FFFFFF'
							            },
					            plotOptions: {
						                bar: {
					                    stacking: 'normal',
                    			        dataLabels: {
                                					enabled: true,
                                					format: "$ {point.y:,.0f}",
				                                	color:'#FFFFFF'
                					                }
	                				        }
								            },
            		series: [{
				                name: 'Tuition',
                				data: [Math.ceil(nationalAveT), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
				            }, 
							{
 				               name: 'Other Cost',
                			   data: [Math.ceil(nationalAveFee), Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
				            }]
					     }); //CLOSING: Highcharts.Chart
				 }); //CLOSING: Ready Function
  	} // CLOSING: 12 Credits
      // When national average is not requested.
    
    // 9 Credits
    //When national average is requested.
      
  	else if(credPerSem == 9)
  	 	{
  	 		$(document).ready(function () {
     chart1 = new Highcharts.Chart({
         			chart: {
             				renderTo: 'chartBox',
             				type: 'bar'
         					},		
		
					title: {
			                text: 'Cost Comparison'
            				},
		            xAxis: {
         			       categories: ['National Average '+yourPlanName, yourPlanName, '12 cred/sem Plan', '15 cred/sem Plan']
				            },
		            yAxis: {
			                title: {
            				        text: 'Cost (in dollars)'
                					}
				            },
	               legend: {
       					         backgroundColor: '#FFFFFF'
            			   },
		            plotOptions: {
        			        bar: {
                    				stacking: 'normal',
		                            dataLabels: {
				        	                        enabled: true,
				        	                        format: "$ {point.y:,.0f}",
                				                	color:'#FFFFFF'
                                				}
                            	 }
					             },
            series: [{
            		    name: 'Tuition',
		                data: [Math.ceil(nationalAveT), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
        		     }, 
        		     {
		                name: 'Other Cost',
        		        data: [Math.ceil(nationalAveFee), Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
            		 }]
     			}); //CLOSING: Highcharts.Chart
 			}); //CLOSING: Ready Function
  	} // CLOSING: 9 Credits
      // When national average is not requested.
  	 	
  	 	
  	 	// Other Credits
	    //When national average is requested.
  	 	
		else
		{
			$(document).ready(function () {
				     chart1 = new Highcharts.Chart({
         			 chart: {
				             renderTo: 'chartBox',
			                 type: 'bar'
				             },		
		
					title: {
			                text: 'Cost Comparison'
            				},
		            xAxis: {
        			        categories: ['National Average '+yourPlanName, yourPlanName, '9 cred/sem Plan', '12 cred/sem Plan', '15 cred/sem Plan']
				            },
		            yAxis: {
			                title: {
            				        text: 'Cost (in dollars)'
					                }
			              },
            		legend: {
                			backgroundColor: '#FFFFFF'
				            },
	                plotOptions: {
        			        bar: {
                    				stacking: 'normal',
		                            dataLabels: {
        				                        enabled: true,
        				                        format: "$ {point.y:,.0f}",
			                                	color: '#FFFFFF'
            				                    }
                            	}
            				},
            series: [{
                		name: 'Tuition',
		                data: [Math.ceil(nationalAveT), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition), Math.ceil(uafTuition)]
        		     }, 
        			{
            		    name: 'Other Cost',
		                data: [Math.ceil(nationalAveFee), Math.ceil(uafFee), Math.ceil(storeAlternateFee[0]), Math.ceil(storeAlternateFee[1]), Math.ceil(storeAlternateFee[2])]
		            }]
			     }); //CLOSING: Highcharts.Chart
			 }); //CLOSING: Ready Function
	} // CLOSING: Other Credits
 	  // When national average is not requested.

	}// CLOSING: When national average is requested.

} // CLOSING: graphGenerator() function 