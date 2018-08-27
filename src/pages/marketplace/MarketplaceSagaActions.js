import { put, takeLatest } from 'redux-saga/effects'

export function * approveApplication(id) {
    yield put({type: 'APPROVE', payload: id})
    yield takeLatest('GET_ALL_STORES', getAllStores)
}

export function * getAllStores(allStores) {
    yield put({type: 'ALL_STORES', payload: allStores})
}

function * marketplaceSaga() {
    // yield takeLatest('APPROVE_APPLICATION', approveApplication)
    // yield takeLatest('GET_ALL_STORES', getAllStores)
}

export default marketplaceSaga