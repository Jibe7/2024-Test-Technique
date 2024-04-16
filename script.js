async function fetchData() {
    const response = await fetch('data.json');
    const jsonData = await response.json();
    return jsonData;
  }
  
  
function categorize(jsonArray) {
    for (const i = 0; i < jsonArray.length; i++) {
        
    }
}
  

