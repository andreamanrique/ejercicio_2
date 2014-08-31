window.onload = function()
{
	nom_div("ejecuta").addEventListener('click', function(event)
	{
		var objAnima = nom_div("nombre");
		var objAnima2 = nom_div("imagen");
		var objAnima3 = nom_div("texto");
		objAnima.setAttribute("class", "animated " + nom_div("botonanimar1").value);
		objAnima2.setAttribute("class", "animated " + nom_div("botonanimar2").value);
	})
	
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}