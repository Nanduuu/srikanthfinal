<Footer theme="light" style={{background:"#011456",textAlign: 'center' ,width:'100%' ,boxShadow:"2px 2px 10px black ", bottom:'0px'}}>
                                                <Col span={24}>
                                                <Popover
                                                    content={<a onClick={this.hide}>Close</a>}
                                                    title="Need your role and responsibilities to help you !! Please do Whatsapp for Quick response - +099-493-85170"
                                                    trigger="click"
                                                    visible={this.state.visible}
                                                    onVisibleChange={this.handleVisibleChange}
                                                  >
                                                    <Button class = "primary"><Icon type="tablet" ></Icon></Button>
                                                  </Popover>
                                                  <a href="https://facebook.com/techmaster.s.5" target="_blank"><Button><Icon type="facebook" theme="outlined" /></Button></a>
                                                  <a href="https://linkedin.com/in/27tekmasters" target="_blank"><Button><Icon type="linkedin" theme="outlined" /></Button></a>
                                                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=27tekmasters@gmail.com&su=SUBJECT&body=BODY" target="_blank"><Button><Icon type="google" theme="outlined" /></Button></a>
                                                  </Col>
                                    </Footer>




<div className="flex-element2">
                                         
                                          <Displayqa tech_num = { this.state.tech_num } />
                                       </div>


