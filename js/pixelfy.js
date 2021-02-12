var url = "https://sourceforge.net/projects/pixel-spoof/files/stats/json?start_date=2014-10-29&end_date=2022-1-1";
            
$.ajax({
method: "GET",
cache: false,
url: url,
success: function(data) {
document.getElementById('pixelfy').innerHTML = data.total;
},
error: function(error) {
},
});