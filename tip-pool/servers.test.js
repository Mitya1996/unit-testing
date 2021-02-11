describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    //essentially tests our 'database' that 1st, it contains a new entry, and 2nd, that the entry value is 'Alice'
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');

  });
  it('should not add a new server if the name is blank',()=>{
    serverNameInput.value = '';
    submitServerInfo()
    expect(Object.keys(allServers).length).toEqual(0) //it's ok, this works, so below is acceptable
  })

  //should make a new server appear on the table
  it('should make a new server appear on the table',()=>{
    submitServerInfo()  //this i mean
    updateServerTable()

    let tds = document.querySelectorAll('#serverTable tbody tr td')

    expect(tds.length).toEqual(3)
    expect(tds[0].innerText).toEqual('Alice')
    expect(tds[1].innerText).toEqual('$0.00')
    expect(tds[2].innerText).toEqual('X');

                        
  })
  afterEach(function() {
    // teardown logic .. reset the serverId b/c it was ++ed, empty serverTbody, serverNameInput does not need
    //to be erased b/c that's part of the submitServerInfo function
    serverId = 0
    serverTbody.innerHTML = ''
    allServers = {}
  });
});
