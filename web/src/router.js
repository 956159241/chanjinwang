
import './views/home.vue'
import './views/jysdt.vue'
import './views/dype.vue'
import './views/dype-0.vue'
import './views/penr-1.vue'
import './views/penr-2.vue'
import './views/penr-3.vue'
import './views/penr-4.vue'
import './views/penr-5.vue'
import './views/jzcj.vue'
import './views/wdbj-0.vue'
import './views/wdbj.vue'
import './views/xsscp-0.vue'
import './views/xsscp.vue'
import './views/cjdt.vue'
import './views/cjzc.vue'
import './views/zcnr.vue'
import './views/cjxw.vue'
import './views/xwnr.vue'
import './views/xwnr-1.vue'
import './views/xwnr-2.vue'
import './views/xwnr-3.vue'
import './views/xwnr-4.vue'
import './views/xwnr-5.vue'
import './views/xwnr-6.vue'
import './views/xwnr-7.vue'
import './views/xwnr-8.vue'
import './views/xpfb.vue'
import './views/rjxz.vue'
import './views/cpda.vue'
import './views/bj.vue'
import './views/hj.vue'
import './views/hjnr-1.vue'
import './views/hjnr-2.vue'
import './views/hjnr-3.vue'
import './views/cy.vue'
import './views/cynr.vue'
import './views/cynr-1.vue'
import './views/cynr-2.vue'
import './views/cynr-3.vue'
import './views/lxwm.vue'

// import './views/about.vue'
// import './views/serviceRouter.vue'
// import './views/important.vue'
// import './views/activity.vue'
// import './views/fixedIncome.vue'
// import './views/equityInvestment.vue'
// import './views/stockRight.vue'
// import './views/offBeat.vue'
// import './views/overseasInvestment.vue'
// import './views/share.vue'
// import './views/talk.vue'
// import './views/plan.vue'
// import './views/officeRouter.vue'
// import './views/wealth.vue'

export default function (router) {
  router.map({
    '/home': {
      component (resolve) {
        require(['./views/home.vue'], resolve)
      },
      title: '产金网'
    },
    '/jysdt': {
      component (resolve) {
        require(['./views/jysdt.vue'], resolve)
      },
      title: '交易所动态'
    },
    '/dype-0': {
      component (resolve) {
        require(['./views/dype-0.vue'], resolve)
      },
      title: '大圆普洱'
    },
    '/penr-1': {
      component (resolve) {
        require(['./views/penr-1.vue'], resolve)
      },
      title: '大圆普洱'
    },
    '/penr-2': {
      component (resolve) {
        require(['./views/penr-2.vue'], resolve)
      },
      title: '大圆普洱'
    },
    '/penr-3': {
      component (resolve) {
        require(['./views/penr-3.vue'], resolve)
      },
      title: '大圆普洱'
    },
    '/penr-4': {
      component (resolve) {
        require(['./views/penr-4.vue'], resolve)
      },
      title: '大圆普洱'
    },
    '/penr-5': {
      component (resolve) {
        require(['./views/penr-5.vue'], resolve)
      },
      title: '普洱内容'
    },
    '/jzcj': {
      component (resolve) {
        require(['./views/jzcj.vue'], resolve)
      },
      title: '九州产经'
    },
    '/wdbj-0': {
      component (resolve) {
        require(['./views/wdbj-0.vue'], resolve)
      },
      title: '纬德白酒'
    },
    '/wdbj': {
      component (resolve) {
        require(['./views/wdbj.vue'], resolve)
      },
      title: '纬德白酒'
    },
    '/xsscp-0': {
      component (resolve) {
        require(['./views/xsscp-0.vue'], resolve)
      },
      title: '香山收藏品'
    },
    '/xsscp': {
      component (resolve) {
        require(['./views/xsscp.vue'], resolve)
      },
      title: '香山收藏品'
    },
    '/cjdt': {
      component (resolve) {
        require(['./views/cjdt.vue'], resolve)
      },
      title: '产金动态'
    },
    '/cjzc': {
      component (resolve) {
        require(['./views/cjzc.vue'], resolve)
      },
      title: '产金政策'
    },
    '/zcnr': {
      component (resolve) {
        require(['./views/zcnr.vue'], resolve)
      },
      title: '政策内容'
    },
    '/cjxw': {
      component (resolve) {
        require(['./views/cjxw.vue'], resolve)
      },
      title: '产金新闻'
    },
    '/xwnr': {
      component (resolve) {
        require(['./views/xwnr.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-1': {
      component (resolve) {
        require(['./views/xwnr-1.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-2': {
      component (resolve) {
        require(['./views/xwnr-2.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-3': {
      component (resolve) {
        require(['./views/xwnr-3.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-4': {
      component (resolve) {
        require(['./views/xwnr-4.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-5': {
      component (resolve) {
        require(['./views/xwnr-5.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-6': {
      component (resolve) {
        require(['./views/xwnr-6.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-7': {
      component (resolve) {
        require(['./views/xwnr-7.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xwnr-8': {
      component (resolve) {
        require(['./views/xwnr-8.vue'], resolve)
      },
      title: '新闻内容'
    },
    '/xpfb': {
      component (resolve) {
        require(['./views/xpfb.vue'], resolve)
      },
      title: '新品发布'
    },
    '/rjxz': {
      component (resolve) {
        require(['./views/rjxz.vue'], resolve)
      },
      title: '软件下载'
    },
    '/cpda': {
      component (resolve) {
        require(['./views/cpda.vue'], resolve)
      },
      title: '产品档案'
    },
    '/bj': {
      component (resolve) {
        require(['./views/bj.vue'], resolve)
      },
      title: '白酒'
    },
    '/hj': {
      component (resolve) {
        require(['./views/hj.vue'], resolve)
      },
      title: '红酒'
    },
    '/hjnr-1': {
      component (resolve) {
        require(['./views/hjnr-1.vue'], resolve)
      },
      title: '红酒内容'
    },
    '/hjnr-2': {
      component (resolve) {
        require(['./views/hjnr-2.vue'], resolve)
      },
      title: '红酒内容'
    },
    '/hjnr-3': {
      component (resolve) {
        require(['./views/hjnr-3.vue'], resolve)
      },
      title: '红酒内容'
    },
    '/cy': {
      component (resolve) {
        require(['./views/cy.vue'], resolve)
      },
      title: '茶叶'
    },
    '/cynr': {
      component (resolve) {
        require(['./views/cynr.vue'], resolve)
      },
      title: '茶叶内容'
    },
    '/cynr-1': {
      component (resolve) {
        require(['./views/cynr-1.vue'], resolve)
      },
      title: '茶叶内容'
    },
    '/cynr-2': {
      component (resolve) {
        require(['./views/cynr-2.vue'], resolve)
      },
      title: '茶叶内容'
    },
    '/cynr-3': {
      component (resolve) {
        require(['./views/cynr-3.vue'], resolve)
      },
      title: '茶叶内容'
    },
    '/lxwm': {
      component (resolve) {
        require(['./views/lxwm.vue'], resolve)
      },
      title: '联系我们'
    },
    '/dype': {
      component (resolve) {
        require(['./views/dype.vue'], resolve)
      },
      title: '大圆普洱'
    },
    '/office': {
      component (resolve) {
        require(['./views/officeRouter.vue'], resolve)
      },
      subRoutes: {
        // 财富管家
        '/wealth': {
          component (resolve) {
            require(['./views/wealth.vue'], resolve)
          },
          title: '财富管家'
        }
      },
      title: '家族办公室'
    },
    '/service': {
      component (resolve) {
        require(['./views/serviceRouter.vue'], resolve)
      },
      subRoutes: {
        // 重要产品
        '/important': {
          component (resolve) {
            require(['./views/important.vue'], resolve)
          },
          title: '重要产品'
        },

        // 固定收益产品
        '/fixedIncome': {
          component (resolve) {
            require(['./views/fixedIncome.vue'], resolve)
          },
          title: '固定收益产品'
        },

        //  权益投资产品类
        '/equityInvestment': {
          component (resolve) {
            require(['./views/equityInvestment.vue'], resolve)
          },
          title: '权益投资产品类'
        },

        // 股权并购产品类
        '/stockRight': {
          component (resolve) {
            require(['./views/stockRight.vue'], resolve)
          },
          title: '股权并购产品类'
        },

        // 另类产品
        '/offBeat': {
          component (resolve) {
            require(['./views/offBeat.vue'], resolve)
          },
          title: '另类产品'
        },

        // 境外投资
        '/overseasInvestment': {
          component (resolve) {
            require(['./views/overseasInvestment.vue'], resolve)
          },
          title: '另类产品'
        },

        // 主题活动报道
        '/activity': {
          component (resolve) {
            require(['./views/activity.vue'], resolve)
          },
          title: '主题活动报道'
        },

        // 分享会
        '/share': {
          component (resolve) {
            require(['./views/share.vue'], resolve)
          },
          title: '分享会'
        },

        // 报告会
        '/talk': {
          component (resolve) {
            require(['./views/talk.vue'], resolve)
          },
          title: '报告会'
        },

        // 规划
        '/plan': {
          component (resolve) {
            require(['./views/plan.vue'], resolve)
          },
          title: '规划'
        }
      },
      title: '产品与服务'
    }
  })

  router.redirect({
    '/office': '/office/wealth',
    '/office/*': '/office/wealth',
    '/service': '/service/important',
    '/service/*': '/service/important',
    // 重定向任意未匹配路径到 /home
    '*': '/home'
  })
  router.beforeEach(({to, from, next, abort}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    // if (process.env.NODE_ENV === 'development') {
    if (0 && process.env.NODE_ENV === 'development') {
      Promise.resolve(next()).then(() => {
        Array.from(document.querySelectorAll('body *')).forEach((dom) => {
          dom.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
        })
      })
    } else {
      next()
    }
  })
}
