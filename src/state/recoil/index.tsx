import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export type RecoilState = number

export const recoilState = atom<RecoilState>({
	key: 'recoilState',

	default: 0,

	effects_UNSTABLE: [persistAtom],
})
