dataObj = reportObj.get("Tareas Pendientes");
returnjson = Map();
Id = 0;
for each activo in dataObj{
	Id=(activo.get("TASKID"));
	nuevoId = Id.toText();
		url = "https://mas.fanalca.com/api/v3/tasks/"+nuevoId+"/close";
		info url ;
		info nuevoId;
		headers = {"authtoken":"DECD100E-08FB-469B-9188-D25DEBE8E3D7","PORTALID": "1"};
		response = invokeurl
		[
			url: url
			type: PUT
			headers: headers
		];
		Ids = {};
}
returnjson.put("message","Tareas depuradas con éxito");
return returnjson;