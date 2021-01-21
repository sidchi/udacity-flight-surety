
import DOM from './dom';
import Contract from './contract';
import './flightsurety.css';

let result = null;
    let airlines = null;
    let flightName = null;
    let depature = null;

(async() => {

    let result = null;

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    let contract = new Contract('localhost', () => {

        // Read transaction
        contract.isOperational((error, result) => {
            console.log(error,result);
            display('Operational Status', 'Check if contract is operational', [ { label: 'Operational Status', error: error, value: result} ]);
        });
    

        // User-submitted transaction
        DOM.elid('submit-oracle').addEventListener('click', () => {
            let flight = DOM.elid('flight-number').value;
            // Write transaction
            contract.fetchFlightStatus(flight, (error, result) => {
                airlines = result.airline;
                depature = result.timestamp;
                flightName = result.flight;
                console.log(result);
                display('Oracles', 'Trigger oracles', [ { label: 'Fetch Flight Status', error: error, value: result.flight + ' ' + result.timestamp} ]);
            });
        })

        // GEt oracles response
        DOM.elid('oracle-response').addEventListener('click', () => {
            
             
            fetchOracleIndex();

            sleep(500).then(() => {
                let airline = airlines;
                    let flight = flightName;
                    let timestamps = depature;
                let eventIndex_ = DOM.elid('holdIndex').innerHTML;
                
                contract.submitOracleResponse(parseInt(eventIndex_), airline, flight, timestamps, (error, result) => {
                    console.log("The value event is ",eventIndex_);

                    DOM.elid("oracle-response").style.display="block";
                     DOM.elid('oracle-response').innerHTML += result.statusCode;
           

                   

                                    
                     });
                })

             })
    
    });
    

})();


function display(title, description, results) {
    let displayDiv = DOM.elid("display-wrapper");
    let section = DOM.section();
    section.appendChild(DOM.h2(title));
    section.appendChild(DOM.h5(description));
    results.map((result) => {
        let row = section.appendChild(DOM.div({className:'row'}));
        row.appendChild(DOM.div({className: 'col-sm-4 field'}, result.label));
        row.appendChild(DOM.div({className: 'col-sm-8 field-value'}, result.error ? String(result.error) : String(result.value)));
        section.appendChild(row);
    })
    displayDiv.append(section);

}

function fetchOracleIndex(response){
    // Fetch flight status
            const responseURL = 'http://localhost:3000/eventIndex';  //our url here

            fetch(responseURL)  
            .then(  
                function(res) {  
                    if (res.status !== 200) {  
                        console.warn('Looks like there was a problem. Status Code: ' + res.status);  
                        return;  
                    }

                    // Examine the text in the response
                    res.json().then(function(dataf) {  
                        let p = document.getElementById('holdIndex');  
                        dataf = dataf.result;
                        p.innerHTML = parseInt(dataf);
                    }); 
                }  
            )  
            .catch(function(err) {  
                console.error('Fetch Error -', err);  
            });
         
        }






