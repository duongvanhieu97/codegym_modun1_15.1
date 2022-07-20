let number = +prompt('Nhập số xem có phải số nguyên tố không')
isPrime(number)

function isPrime(number) {
    let count = 0;
    let check = false;
    if (number === 0) {
        alert(number + ': không là số nguyên tố')
    } else if (number === 1 || number === 2) {
        alert(number + ': là số nguyên tố')
    } else if (number % 2 === 0) {
        check = false
    } else {
        for (let i = 3; i <= number; i++) {
            if (number % i === 0) {
                count += 1
                if (count > 1) {
                    break;
                } else {
                    check = true;
                }
            }
        }
    }
    if (check) {
        alert(number + ': Là số nguyên tố')
    } else {
        alert(number + ': Không Là số nguyên tố')
    }
}
