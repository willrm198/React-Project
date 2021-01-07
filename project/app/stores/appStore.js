import { getUserByUsername } from '../services/UserApi';

const createAppStore = () => ({
  isFlippable: false,
  user: {},
  username: '',
  loading: false,
  memberInfo: undefined,
  async init() {
    this.username = '';
    this.user = await getUserByUsername(this.username);
  },
  setIsFlippable(value = false) {
    this.isFlippable = value;
  },
  setLoading(value) {
    this.loading = value;
  },
  setMemberInfo(value) {
    this.memberInfo = value;
  },
  toggleIsFlippable() {
    this.isFlippable = !this.isFlippable;
  },
  get memberName() {
    return this.memberInfo && this.memberInfo.name;
  },
  get hasMemberInfo() {
    return !!this.memberInfo;
  },
});

export default createAppStore;
