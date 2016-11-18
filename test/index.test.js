'use strict';
const sinonChai = require('sinon-chai')
const chai = require('chai')
require('chai-as-promised')
chai.use(sinonChai)
const expect = chai.expect
const ExampleClass = require('../dist/models/example');
const sinon = require('sinon')

describe('index.js', ()=> {
  it('should pass please', ()=> {
    //console.log(chai)
    expect(true).to.be.true
  })

  describe('ExampleClass', ()=> {
    let ec;
    beforeEach(()=> {
      sinon.spy(ExampleClass.prototype, 'constructor')
    })

    it('should set the args', ()=> {
      ec = new ExampleClass(1,2,3,4)
      expect(ec.args).to.eql([1,2,3,4])
      expect(ExampleClass.prototype.constructor).to.have.been.calledWith(1,2,3,4)
      expect(ExampleClass.prototype.constructor).to.be.calledOnce
    })
  })
})