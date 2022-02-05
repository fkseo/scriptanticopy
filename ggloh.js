<script type='text/javascript'>

//<![CDATA[
//Script Redirect CTRL + U
/// ganti dengan url keinginan kalian
// By Husni Mubarok
function redirectCU(e) {
  if (e.ctrlKey && e.which == 85) {
    window.location.replace("#");
    return false;
  }
}
document.onkeydown = redirectCU;

//Script Redirect Klik Kanan
function redirectKK(e) {
  if (e.which == 3) {
    window.location.reload();
    return false;
  }
}
document.oncontextmenu = redirectKK;
//]]>
</script>