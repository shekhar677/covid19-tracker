<template>
  <div class="relative">
    <!-- <svg @click="toggle" v-if="!bell" class="dot relative select-none fill-grey-200 w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="39.346" height="46.5" viewBox="0 0 39.346 46.5"><g transform="translate(-1626.145 -42)"><path d="M25.3,49.875a4.653,4.653,0,0,0,4.629-4.65H20.669A4.653,4.653,0,0,0,25.3,49.875Zm15.044-13.95V23.137A15.07,15.07,0,0,0,28.77,8.49V6.862a3.472,3.472,0,1,0-6.943,0V8.49A15.07,15.07,0,0,0,10.254,23.137V35.925l-4.629,4.65V42.9H44.971V40.575Z" transform="translate(1620.52 38.625)"/></g></svg> -->
    <svg @click="toggle" v-if="!bell" class="select-none fill-grey-200 w-5 h-5 sm:w-5 sm:h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="40.192" height="47.5" viewBox="0 0 40.192 47.5"><g transform="translate(-1626.145 -42)"><path d="M25.721,50.875a4.753,4.753,0,0,0,4.728-4.75H20.993A4.753,4.753,0,0,0,25.721,50.875Zm15.368-14.25V23.562A15.394,15.394,0,0,0,29.267,8.6V6.937a3.546,3.546,0,1,0-7.093,0V8.6A15.394,15.394,0,0,0,10.353,23.562V36.625l-4.728,4.75V43.75H45.817V41.375Z" transform="translate(1620.52 38.625)" fill="#9da6ba"/><ellipse cx="8.5" cy="8" rx="8.5" ry="8" transform="translate(1649 49)" fill="#ff5c5c"/></g></svg>

    <svg @click="toggle" v-else class="select-none fill-grey-200 w-5 h-5 sm:w-5 sm:h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="41.153" height="46.989" viewBox="0 0 41.153 46.989"><path d="M19.773,34.381a4.706,4.706,0,0,0,4.689-4.709H15.084A4.706,4.706,0,0,0,19.773,34.381Z" transform="translate(0.803 12.608)" fill="#9da6ba"/><path d="M11.657,8.942l.006.008L7.926,5.223,5.2,7.948l7.127,7.14a15.208,15.208,0,0,0-1.814,7.183V35.222L5.881,39.932v2.342H39.543l4.091,4.107,2.722-2.747-1.368-1.36h.036Z" transform="translate(-5.203 -2.255)" fill="#9da6ba"/><path d="M36.372,23.393A15.307,15.307,0,0,0,24.614,8.558V6.909a3.5,3.5,0,1,0-7.01,0V8.558a14.874,14.874,0,0,0-4.72,2l23.487,23.5Z" transform="translate(-0.534 -3.377)" fill="#9da6ba"/></svg>

    <transition name="fade">
      <div v-if="bell" @click="bounceIt" class="bg-white z-30 fixed inset-0 bg-alpha flex justify-center items-center">
        <div class="overflow-y-auto size-control bg-white w-11/12 sm:w-3/4 md:w-2/4 max-h-screen rounded-md shadow-md p-3 sm:p-6 pt-0 sm:pt-0 m-4" :class="{ 'bounce': (bounce == true) }">
          <div class="flex justify-end">
            <div @click="toggle" class="select-none cursor-pointer mt-1">
              <svg class="fill-black w-3 h-3 m-2 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z"/></svg>
            </div>
          </div>
          <div v-if="notification">
            <p class="text-center mb-3 text-black text-xs sm:text-sm">{{ formatDate(lastModified) }}</p>
            <div v-for="(notification, i) in notification" :key="i" class="bg-grey-50 rounded-md p-4 my-2">
              <p class="text-orange text-xxs sm:text-xs2">{{ formatUnixDate(notification.timestamp) }}</p>
              <div class="break-spaces text-black text-xs sm:text-sm font-mt font-semibold" v-html="notification.update">{{ notification.update }}</div>
            </div>
          </div>
          <spinner class="shadow-none" v-else></spinner>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from 'moment'
import spinner from '~/components/spinner'

export default {
  components: {
    spinner
  },
  data() {
    return {
      bell: false,
      notification: null,
      lastModified: null,
      expires: null,
      bounce: false
    }
  },
  methods: {
    toggle() {
      this.bell = !this.bell
      if (this.bell) {
        this.getNotification();
      }
    },
    bounceIt() {
      this.bounce = true
      setTimeout(() => {
        this.bounce = false
      }, 500);
    },
    formatUnixDate(date) {
      return moment.unix(date).fromNow();
    },
    formatDate(date) {
      return moment(date).format('ddd DD MMM, hh:mm a');
    },
    getNotification() {
      this.$axios.get('https://api.covid19india.org/updatelog/log.json')
        .then(res => {
          this.notification = res.data.sort((a, b) => b.timestamp - a.timestamp);
          this.notification = this.notification.slice(0,5);
          this.lastModified = res.headers['last-modified'];
          this.expires = res.headers.expires;
        })
        .catch(err => {
          this.notification = null
        })
    }
  }
}
</script>

<style scoped>
  .break-spaces {
    white-space: break-spaces;
  }
  .bg-alpha {
    background: rgba(0, 0, 0, 0.2);
  }

  .bounce {
    animation: bounce 0.4s ease;
  }

  @keyframes bounce {
    0% {
      transform: scale(1)
    }
    30% {
      transform: scale(1.03)
    }
    50% {
      transform: scale(1)
    }
    75% {
      transform: scale(1.03)
    }
    100% {
      transform: scale(1)
    }
  }
</style>