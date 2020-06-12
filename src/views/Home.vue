<template>
  <div class="memory">
    <div class="head">
      <span class="_ff" @click="goHome">芬芬</span>
      <i @click="forworld" class="forword"></i>
    </div>
    <div class="content">
      <div class="ayff" v-for="(dh,index) in data.content" :key="index">
        <template v-if="dh.ay">
          <div class="ay">
            <div class="_content">{{dh.ay}}</div>
            <img src="../assets/ay.jpg" alt />
          </div>
        </template>
        <template class v-else-if="dh.ff">
          <div class="ff">
            <img src="../assets/ff.jpg" alt />
            <div class="_content">{{dh.ff}}</div>
          </div>
        </template>
        <template v-else-if="dh.recall">
          <div class="recall">对方撤回了一条消息</div>
        </template>
        <template v-else-if="dh.music">
          <audio ref="music" class="music" id="music" loop="loop" autoplay="autoplay">
            <source :src="dh.music" type="audio/mpeg" />您的浏览器不支持 audio 元素。
          </audio>
        </template>
        <template v-else-if="dh.date">
          <div class="data">{{dh.date}}</div>
        </template>
      </div>
    </div>
    <div class="input-content">
      <i class="voice" @click="back"></i>
      <textarea v-model="data.mine"></textarea>
      <i class="smaile"></i>
      <i class="add"></i>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "memory",
  data() {
    return {
      data: {},
      allData: {},
      length: null,
      num: 0
    };
  },
  mounted() {
    axios.get("../../memory.json").then(data => {
      // this.data = data.data[this.num];
      this.allData = data.data;
      this.data = this.allData[this.num];
      this.length = data.data.length;
    });
  },
  methods: {
    forworld() {
      if (this.num >= this.length - 1) {
        this.num = 0;
        this.data = this.allData[this.num];
      } else {
        this.num++;
        this.data = this.allData[this.num];
      }
    },
    goHome() {
      this.$router.push("/");
    },
    back() {
      if (this.num == 0) {
        this.num = this.length - 1;
        this.data = this.allData[this.num];
      } else {
        this.num--;
        this.data = this.allData[this.num];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.memory {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: #ededed;
  .head {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0.5rem 0.2rem;
    border-bottom: #e5e5e5 solid 1px;
    .content-date {
      line-height: 2rem;
      flex: auto;
      text-align: center;
    }
  }

  ._ff {
    line-height: 2rem;
  }
  ._ff::before {
    display: inline-block;
    content: "";
    width: 21px;
    height: 21px;
    background: url(../assets/back.svg);
    background-size: 21px 21px;
  }
  ._ff::after {
    display: inline-block;
    content: "";
    width: 21px;
    height: 21px;
    background: url(../assets/heart.svg);
    background-size: 21px 21px;
  }

  .forword {
    width: 2rem;
    height: 2rem;
    background: url(../assets/more.svg) no-repeat;
    background-size: 2rem 2rem;
    background-position-x: right;
  }
  .content {
    height: 88%;
    overflow-y: scroll;
    .ayff {
      .recall,
      .data {
        margin-top: 0.4rem;
        font-size: 14px;
        padding: 0.3rem 0;
        text-align: center;
        color: #a4a4a4;
      }
      .music {
        height: 20px;
      }
      .ff {
        width: 100%;
        padding: 0.2rem;
        margin-top: 0.4rem;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-start;
        img {
          width: 2.5rem;
          height: 2.5rem;
          margin-left: 0.3rem;
        }
        ._content {
          min-height: 1.5rem;
          line-height: 1.5rem;
          background-color: #fff;
          margin-left: 0.3rem;
          border-radius: 0.3rem;
          padding: 0.5rem 0.4rem;
          max-width: 70%;
          text-align: left;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
      .ay {
        width: 100%;
        padding: 0.2rem;
        margin-top: 0.4rem;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-end;
        img {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.3rem;
        }
        ._content {
          min-height: 1.5rem;
          line-height: 1.5rem;
          background-color: #95ec69;
          margin-right: 0.3rem;
          border-radius: 0.3rem;
          padding: 0.5rem 0.4rem;
          margin-left: 0.4rem;
          max-width: 70%;
          text-align: left;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
    }
  }
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .input-content {
    display: flex;
    position: absolute;
    bottom: 0;
    padding: 0.4rem 0.2rem;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: #f7f7f7;
    border-radius: 0 0 5px 5px;
    i {
      margin: 0 0.1rem;
    }
    .voice {
      width: 2rem;
      height: 2rem;
      background: url(../assets/voice.svg);
      background-size: 2rem 2rem;
    }
    .smaile {
      width: 2rem;
      height: 2rem;
      background: url(../assets/smile.svg);
      background-size: 2rem 2rem;
    }
    .add {
      width: 2rem;
      height: 2rem;
      background: url(../assets/add.svg);
      background-size: 2rem 2rem;
    }
    textarea {
      border: none;
      border-radius: 0.5rpm;
      // margin: 0 0.1rpm;
      min-height: 30px;
      resize: none;
      outline: none;
      width: 66%;
    }
  }
}
</style>>