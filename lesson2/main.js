{
    let color = 'red'        //prompt();
    if (color === 'green') {
        console.log('go');
    } else if (color === 'yellow') {
        console.log('wait');
    }

    let i = confirm('повертає булеве значення');
    i = prompt('Поверне стрінг');
    i = +prompt('Поверне число');

    //switch може порівнювати обєкти
    switch (i) {
        case 'expl1':
            console.log('you entered' + i);
            break;
        case 'expl2':
            console.log('you entered' + i);
            break;
        default:
            console.log('you entered' + i);
    }
}
{
    let expl;
    if (confirm('так-ні')) {
        expl = 10;
    } else {
        expl = 20;
    }

//можна записати по іншому

    let exmpl = (confirm('так-ні')) ? 10 : 20;

}
