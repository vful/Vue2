var vm = new Vue({
  el: '#selectDate',
  data: {
    year: 2018,
    month: 1,
    day: 1,
    days_max: '',
  },
  created: function () {
    this.get_days();
  },
  methods: {
    // 日の最大数を取得
    get_days: function () {
      this.days_max = new Date(this.year, this.month, 0).getDate();
    }
  }
});