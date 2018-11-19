import VisitorCard from '@/components/PieVisitorCard';

export default {
  name: 'Presant',
  components: {
    VisitorCard,
  },
  data() {
    return {
      pageData: {
        visitors: [
          {
            name: '闵文',
            gender: 1,
            phone: '17822349123',
            createTime: 1477808630404,
            respondent: {
              id: '3861234',
              name: '申旭凌',
              phone: '15521767079',
              job: 'FE审核',
              avatar: '',
              belong: 'CQC',
            },
          },
          {
            name: '郭航',
            gender: 1,
            phone: '17822349123',
            createTime: 1477808530404,
            respondent: {
              id: '3861234',
              name: '申旭凌',
              phone: '15521767079',
              job: 'FE审核',
              avatar: '',
              belong: 'CQC',
            },
          },
          {
            name: '艾希',
            gender: 0,
            phone: '17022349123',
            createTime: 1477808630404,
            respondent: {
              id: '3861234',
              name: '申旭凌',
              phone: '15521767079',
              job: 'FE审核',
              avatar: '',
              belong: 'CQC',
            },
          },
          {
            name: '婕拉',
            gender: 0,
            phone: '17822349123',
            createTime: 1477808630404,
            respondent: {
              id: '3861234',
              name: '申旭凌',
              phone: '15521767079',
              job: 'FE审核',
              avatar: '',
              belong: 'CQC',
            },
          },
          {
            name: '陈晨',
            gender: 1,
            phone: '17822349123',
            createTime: 1477808630404,
            respondent: {
              id: '3861234',
              name: '田昊天',
              phone: '15521767079',
              job: 'FE',
              avatar: '',
              belong: '技术部',
            },
          },
          {
            name: '吴岩',
            gender: 1,
            phone: '17822349123',
            createTime: 1477808630404,
            respondent: {
              id: '3861234',
              name: '田昊天',
              phone: '15521767079',
              job: 'FE',
              avatar: '',
              belong: '技术部',
            },
          },
        ],
      },
    };
  },
};
