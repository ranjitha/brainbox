import axios from "axios"

let restEndpoint = "../api/admin/user/"
let sortField = "username"

class RecordStore {
  constructor() {
    this.records = null
  }

  findById(id) {
    return this.list().then((records) => {
      let candidates = records.filter((record) => record.id === id)
      if (candidates.length > 0) {
        return candidates[0]
      }
      throw "element not found"
    })
  }

  list() {
    if (this.records !== null) {
      return Promise.resolve(this.records)
    }

    return axios.get(restEndpoint).then((response) => {
      this.records = response.data
      this.records = this.records.sort((a, b) => a[sortField].localeCompare(b[sortField]))
      return this.records
    })
  }

  save(record) {
    if (record.id) {
      return axios.put(restEndpoint + record.id, record).then((response) => {
        let internalRecord = this.records.filter((u) => u.id === record.id)[0]
        Object.assign(internalRecord, response.data)
        return internalRecord
      })
    } else {
      return axios.post(restEndpoint, record).then((response) => {
        this.records.push(response.data)
        this.records = this.records.sort((a, b) => a[sortField].localeCompare(b[sortField]))
        return response.data
      })
    }
  }

  delete(record) {
    return axios.delete(restEndpoint + record.id).then((response) => {
      this.records = this.records.filter((u) => u.id !== record.id)
      console.log(this.records)
      return response.data
    })
  }

}


let store = new RecordStore()
export default store
