function(config) {

 

    let $ = apex.jQuery,
        toolbarData = $.apex.interactiveGrid.copyDefaultToolbar(), // copy the whole toolbar
        toolbarGroup = toolbarData.toolbarFind("actions3"); // this is the group with the action=add row
        saverowAction = toolbarData.toolbarFind("save"),
        editrowAction = toolbarData.toolbarFind("edit"),
        addrowAction = toolbarData.toolbarFind("selection-add-row"); //add row button
     

 

    // add a new "delete" button
    toolbarGroup.controls.push({type: "BUTTON",
                                action: "selection-delete",
                                icon: "fa fa-trash",//icon-ig-delete alternative FontAwesome icon: "fa fa-trash",
                                label: "Eliminar",
                                iconBeforeLabel: true,
                                hot: true
                               });
    
    // manipulate the buttons
    saverowAction.icon = "icon-ig-save-as";
    saverowAction.label = "Guardar Cambios";
    saverowAction.iconBeforeLabel = true;
    saverowAction.hot = true;
    
    addrowAction.icon = "icon-ig-add-row"; // alternative font awesome icon: "fa fa-plus";
    addrowAction.label = "Agregar";
    addrowAction.iconBeforeLabel = true;
    addrowAction.hot = true;
   
    editrowAction.label = "Editar";
    editrowAction.iconBeforeLabel = true;
    editrowAction.hot = false;

 

    //store the config
    config.toolbarData = toolbarData;
    
    return config;
}