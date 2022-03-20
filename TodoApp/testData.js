export default {
  TEST_DATA: [
    {
      title: '반복',
      isRepeat: true,
      data: [
        {
          id: 1,
          title: '매일 해야되요 - 1',
          desc: '매일 해야되는 첫번째 업무에요',
          isFinish: false,
        },
        {
          id: 2,
          title: '매일 해야되요 - 2',
          desc: '매일 해야되는 두번째 업무에요',
          isFinish: false,
        }
      ]
    },
    {
      title: '오늘 하루',
      isRepeat: false,
      data: [
        {
          id: 1,
          title: '오늘만 하면되요 - 1',
          desc: '오늘 해야되는 첫번째 업무에요',
          isFinish: false,
        },
        {
          id: 2,
          title: '오늘만 하면되요 - 2',
          desc: '오늘 해야되는 두번째 업무에요',
          isFinish: false,
        }
      ]
    },
  ]
}