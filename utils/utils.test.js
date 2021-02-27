import { capitalize } from "./utils"

describe("capitalize()", () => {
  test("should return an empty string when passed an empty string or when passed no argument", () => {
    expect(capitalize("")).toEqual("") // empty string
    expect(capitalize("   ")).toEqual("") // white space
    expect(capitalize()).toEqual("") // no args
  })
  test("should return a capitalised word when passed a string which doesnt contain any hyphens", () => {
    expect(capitalize("word")).toEqual("Word")
  })
  test("should return space separated, capitalized words when provided with a hyphenated string", () => {
    expect(capitalize("this-is-a-string")).toEqual("This Is A String")
  })
})
