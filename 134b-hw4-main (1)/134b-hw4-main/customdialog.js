export function Alert(){
    const ALDialog = document.getElementById('ALDialog');
    ALDialog.showModal();
}
export function Alertdischarge() {
    const ALDialog = document.getElementById('ALDialog');
    ALDialog.close();
    }
export function Confirm(){
    const ConDialog = document.getElementById('ConDialog');
    const confirmbutton = document.getElementById('confirmbutton');
    ConDialog.showModal();
}
export function Prompt(){
    const promptbutton = document.getElementById('promptbutton');
    const ProDialog = document.getElementById('ProDialog');
    ProDialog.showModal();
}
export function Confirmcancel(){
    const ConDialog = document.getElementById('ConDialog');
    const confirmbutton = document.getElementById('op');
    ConDialog.close();
    confirmbutton.innerHTML = `The value returned by the confirm method is: False`;
}
export function Confirmok(){
    const ConDialog = document.getElementById('ConDialog');
    const confirmbutton = document.getElementById('op');
    ConDialog.close();
    confirmbutton.innerHTML = `The value returned by the confirm method is: True`;

}
export function promptcancel(){
    const promptbutton = document.getElementById('op');
    const ProDialog = document.getElementById('ProDialog');
    ProDialog.close();
    promptbutton.innerHTML = `Prompt result: User didn't enter anything`;

}
export function promptok(){
    const promptbutton = document.getElementById('op');
    const ProDialog = document.getElementById('ProDialog');
    let input = document.getElementById('text').value;
    input = DOMPurify.sanitize(input);
    ProDialog.close();
    if(input){
        promptbutton.innerHTML = `Prompt result: ${input}`;

    }
    else{
        promptbutton.innerHTML =  `Prompt result: User didn’t enter anything`;

    }
    document.getElementById('text').value = '';
}

		
		// // Get the OK and Cancel buttons inside the dialog box
		// //const okBtn = ALDialog.querySelector('#okBtn');
        // const CancelBtn= ConDialog.querySelector('#CancelBtn');
        // const okBtn2 = ConDialog.querySelector('#okBtn');
        // const okBtn3 = ProDialog.querySelector('#okBtn');
        // const CancelBtn2 = ProDialog.querySelector('#CancelBtn');
        //  const nameOutput = document.getElementById('name-output');
        // const nameInput = document.getElementById('name-input');

		// // Event listener for the "Show Dialog Box" button
		// alertdiabtn.addEventListener('click', () => {
		// 	ALDialog.showModal();
            
		// });
        // confirmbutton.addEventListener('click', () => {
		// 	ConDialog.showModal();
            
		// });
        // promptbutton.addEventListener('click', () =>{
        //     ProDialog.showModal();
        // });

		// // Event listener for the OK button inside the dialog box
		// okBtn.addEventListener('click', () => {
		// 	ALDialog.close();
		// });
        // okBtn2.addEventListener('click', () => {
		// 	ConDialog.close();
        //     document.getElementById('op').textContent = `Confirm result: true`;

		// });
        // okBtn3.addEventListener('click', () => {
            
        //     if(op !=null){
        //         op.textContent = `Prompt Result: ${nameInput.value}!`;
        //     }
        //     else{
        //         op.textContent = `User didn't enter anything`;
        //     }
		// 	ProDialog.close();
		// });

        // CancelBtn.addEventListener('click', () => {
		// 	ConDialog.close();
        //     document.getElementById('op').textContent = `Confirm result: false`;

		// });
        // CancelBtn2.addEventListener('click', () => {
		// 	ProDialog.close();
		// 	op.textContent = `User didn't enter anything`;
		// });
        

