import firebase from "~/plugins/firebase.js"
const db = firebase.firestore();
const itemRef = db.collection('room')

export default  async function ({ store, redirect, query }) {
  const roomId = query.id || 'testroomid'

  const response = await itemRef.doc(roomId).get()

  if (!response.data()) {
    return redirect('/')
  }

}