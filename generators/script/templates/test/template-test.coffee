Helper = require('hubot-test-helper')
chai = require 'chai'
nock = require 'nock'

expect = chai.expect

helper = new Helper([
  '../node_modules/hubot-enterprise/src/0_bootstrap.coffee',
  '../src/<%= scriptName %>.coffee'])

process.env.HUBOT_LOG_LEVEL='error'

describe '<%= scriptName %>', ->
  before (done) ->
    nock.load './test/<%= scriptName %>-http-mock.json'
    setTimeout done, 1000 # Give Nock some time to load

  beforeEach ->
    @room = helper.createRoom()

  afterEach ->
    @room.destroy()

  it 'responds to <%= scriptName %> create', ->
    @room.user.say('alice', '@hubot <%= scriptName %> create issue').then =>
      expect(@room.messages).to.eql [
        ['alice', '@hubot <%= scriptName %> create issue']
        ['hubot', '@alice in <%= scriptName %> create']
      ]

  it 'hears <%= scriptName %> update', ->
    @room.user.say('bob', '<%= scriptName %> update issue').then =>
      expect(@room.messages).to.eql [
        ['bob', '<%= scriptName %> update issue']
        ['hubot', 'in <%= scriptName %> update']
      ]
