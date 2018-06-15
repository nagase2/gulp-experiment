import _ = require("underscore")

import fs = require('fs')
import uuidv1 = require("uuid/v1")
import ShortUniqueId = require("short-unique-id")
import "jasmine"



"use strict"
/**
 * underscoreのファンクションの検証に使う
 */


describe("UUIDの作成テスト", () => {

  beforeEach(function () {
  })

  it("UUIDを取得するサンプル", () => {

    uuidv1() /*?*/
    uuidv1()/*?*/
    uuidv1()/*?*/
    uuidv1()/*?*/
    uuidv1()/*?*/
    uuidv1()/*?*/
    // Instantiate
    // Import

    const uid = new ShortUniqueId()
    uid.randomUUID(6)
    uid.randomUUID(8)
    uid.randomUUID(8)
  })
  it("関係ないけどオブジェクトの動作確認", () => {
    var value1 = { foo: "xxx", bar: "cccc" }

    value1.mm = "nagase"

    console.log(value1)



  })

})