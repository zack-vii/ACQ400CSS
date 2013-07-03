importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var flagName = "firstRun";
//Avoid running this script if the script is triggered during opi startup.
if(widgetController.getExternalObject(flagName) == null){
	widgetController.setExternalObject(flagName, false);	
}else{
	var macroInput = DataUtil.createMacrosInput(true);
	macroInput.put("UUT", PVUtil.getString(pvArray[0]));	
	// not easy to get strings "0", "1" etc to stay as strings...	
	macroInput.put("SITE", "0" ); // PVUtil.getString(pvArray[1]));
	//Open an OPI with the new Macro Input.
       var opi = widget.getPropertyValue("name") + ".opi";
	ScriptUtil.openOPI(widgetController,  opi, 0, macroInput);

}
