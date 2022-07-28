const refs = {
    rangeRef: document.querySelector('#font-size-control'),
    spanRef: document.querySelector('#text'),
};


refs.rangeRef.addEventListener('input', onRangeChangeTextSize);

function onRangeChangeTextSize (event) {
    refs.spanRef.style.fontSize = `${event.currentTarget.value}px`;
};