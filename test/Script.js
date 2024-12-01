function expandOptions(selectedId) {
    // Hide all details sections
    const details = document.querySelectorAll('.details');
    details.forEach((detail) => {
      detail.style.display = 'none';
    });
  
    // Show the selected details section
    const selectedDetails = document.getElementById(selectedId);
    selectedDetails.style.display = 'block';
  }
  
  function submitOrder() {
    const selectedOption = document.querySelector('input[name="bundle"]:checked');
    if (!selectedOption) {
      alert('Please select a bundle option!');
      return;
    }
  
    const selectedId = selectedOption.id;
    const size = document.getElementById(`size${selectedId.slice(-1)}`).value;
    const color = document.getElementById(`color${selectedId.slice(-1)}`).value;
  
    alert(`Order submitted:\nBundle: ${selectedOption.nextElementSibling.textContent.trim()}\nSize: ${size}\nColor: ${color}`);
  }
  
  