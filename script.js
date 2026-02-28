<script>
  function payNow(codeId) {
    var options = {
      "key": "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key
      "amount": 4900, // 49 rupees in paise
      "currency": "INR",
      "name": "Project Hub",
      "description": "Unlock Project Code",
      "handler": function (response) {
        alert("Payment Successful 🎉 Code Unlocked!");
        document.getElementById(codeId).classList.remove("hidden");
      },
      "theme": {
        "color": "#ff4f8b"
      }
    };

    var rzp = new Razorpay(options);
    rzp.open();
  }
</script>