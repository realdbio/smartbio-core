Meteor.startup(function(){
    var addConditionDialogSpec = {
        template: Template.addConditionDialog,
        title: "Share the app",
        modalDialogClass: "share-modal-dialog", //optional
        modalBodyClass: "share-modal-body", //optional
        modalFooterClass: "share-modal-footer",//optional
        removeOnHide: true, //optional. If this is true, modal will be removed from DOM upon hiding
        buttons: {
            "cancel": {
                class: 'btn-danger',
                label: 'Cancel'
            },
            "ok": {
                closeModalOnClick: false, // if this is false, dialog doesnt close automatically on click
                class: 'btn-info',
                label: 'Ok'
            }

        }
    };

    var addConditionDialog = ReactiveModal.initDialog(addConditionDialogSpec);

});