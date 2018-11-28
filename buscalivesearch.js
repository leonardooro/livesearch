function showResult(str) {
  if (str.length==0) { 
    document.getElementById(&quot;livesearch&quot;).innerHTML=&quot;&quot;;
    document.getElementById(&quot;livesearch&quot;).style.border=&quot;0px&quot;;
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 &amp;&amp; this.status==200) {
      document.getElementById(&quot;livesearch&quot;).innerHTML=this.responseText;
      document.getElementById(&quot;livesearch&quot;).style.border=&quot;1px solid #A5ACB2&quot;;
    }
  }
  xmlhttp.open(&quot;GET&quot;,&quot;livesearch.php?q=&quot;+str,true);
  xmlhttp.send();
}