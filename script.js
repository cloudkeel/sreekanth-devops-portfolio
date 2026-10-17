const copyButton = document.querySelector('#copy-brief');
const status = document.querySelector('#copy-status');
const fallback = document.querySelector('#manual-copy');
const brief = 'Project brief\n\nWhat needs to change?\n\nWhich cloud and tools do you use?\n\nWhat would a successful handover include?\n\nWhat timeline and budget are you working with?\n';
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(brief);
    status.textContent = 'Questions copied. Add your answers before sending.';
    fallback.hidden = true;
  } catch {
    fallback.value = brief;
    fallback.hidden = false;
    fallback.focus();
    fallback.select();
    status.textContent = 'Select and copy the questions below.';
  }
});
