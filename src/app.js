import $ from 'jquery'
import handlebars from 'handlebars-template-loader/runtime'
import handlebarsHelpers from 'handlebars-helpers'

import * as Templates from './templates'

handlebarsHelpers({ handlebars })
$(init)

let timeNow = new Date()
let data = { loadingTime: timeNow.toString() }
let appContainer = undefined

function init() {
  let template = Templates.app()
  $.parseHTML(template).forEach((dom, i) => { document.body.append(dom); if (i == 0) appContainer = dom })

  addControls()

  postVisitor()
}

function addControls() {
  $(appContainer).on('click', "#records-get", getVistor)
}

function getVistor(e) {
  $.getJSON('/api/visitors?_limit=10&_sort=createdAt&_order=DESC').done(getVistorDone).fail(getVistorFail).always(getVistorAlways)
}

function getVistorDone(remoteData) {
  data.records = { status: "success", records: remoteData }
}

function getVistorFail() {
  data.records = { status: "fail" }
}

function getVistorAlways() {
  let template = Templates.records(data)
  $('#records-result', appContainer).replaceWith($.parseHTML(template)[0])
}

function postVisitor() {
  $.post('/api/visitors', { createdAt: timeNow.getTime() }, 'json').always(postVistorFinish)
}

function postVistorFinish() {
  getCount()
}

function getCount() {
  $.getJSON('/api/visitors?_limit=0').done(getCountDone).fail(getCountFail).always(getCountFinish)
}

function getCountDone(remoteData, textStatus, request) {
  data.count = request.getResponseHeader('x-total-count')
  data.status = "success"
}

function getCountFail() {
  data.status = "fail"
}

function getCountFinish() {
  let template = Templates.loaded(data)
  $(appContainer).empty()
  $.parseHTML(template).forEach((dom) => { appContainer.append(dom) })
}
