function hookControlgroupEvents (pageObj) {
	var controlObj = $("div.controlClassHeizung");
	controlObj.on('change', '.click-rC', function(event) {
		event.preventDefault();
		var controlValue = $("#ControlHeizung :radio:checked").val();
		var selectedId = $('.RowSelected', pageObj).attr("id");
		
		if (gueltigeDaten (pageObj, 'HeizungControlChange')) {
			var dataToServer = {
					cmd: controlValue,
					newpage: "f",
					page: pageObj.attr("id"),
					selid: selectedId,
					ids: globalFilteredIds,
					qstates: "t"
			}
			getDeviceStatesFromServer(dataToServer, "HeizungControlChange", event);
		}
		return false;
	});
}