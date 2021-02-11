
//before each add a dummy 
describe("Payments test (with setup and tear-down)", function() {

beforeEach(()=>{
    //set bill amount to 1000 and tip amt to 100 
    billAmtInput.value = 1000
    tipAmtInput.value = 100
})

it('submitPaymentInfo should work',function(){
    submitPaymentInfo()
    //check if id is 1 
    expect(paymentId).toEqual(1)
    //check if theres a payment in the 'database' 
    expect(Object.keys(allPayments).length).toEqual(1)

    //check if the payment in the 'db' is 
    expect(allPayments['payment1'].billAmt).toEqual('1000')
    expect(allPayments['payment1'].tipAmt).toEqual('100')
    expect(allPayments['payment1'].tipPercent).toEqual(10)
})

it('should not submit if there is no input',()=>{
    billAmtInput.value = ''
    tipAmtInput.value = ''

    submitPaymentInfo()
    expect(Object.keys(allPayments).length).toEqual(0)
})

it('should not submit if there is bill but no tip',()=>{
    tipAmtInput.value = ''

    submitPaymentInfo()
    expect(Object.keys(allPayments).length).toEqual(0)
})

it('createCurPayment should work',()=>{
    let curPayment = createCurPayment();
    
    expect(curPayment).toEqual({
        billAmt: '1000',
        tipAmt: '100',
        tipPercent: 10,
      })
})

//appendPaymentTable
it('should append table data appendPaymentTable()',()=>{
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let tds = document.querySelectorAll('#paymentTable tbody tr td');

    expect(tds.length).toEqual(4);
    expect(tds[0].innerText).toEqual('$1000');
    expect(tds[1].innerText).toEqual('$100');
    expect(tds[2].innerText).toEqual('10%');
    expect(tds[3].innerText).toEqual('X');
})

it('should not create payment with empty input on createCurPayment()', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
  });

afterEach(()=>{
    //set allPayments to empty obj
    allPayments = {}
    paymentId = 0
    //remove all html inside both tables
    paymentTbody.innerHTML = ''

    summaryTds[0].innerHTML = ''
    summaryTds[1].innerHTML = ''
    summaryTds[2].innerHTML = ''

    //also server
    serverTbody.innerHTML = ''

})

})