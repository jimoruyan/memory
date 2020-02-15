<template>
  <div class="wrapper">
    <div class="memory" v-for="(content,index) in data" :key="index">
      <div class="head">
        <span>芬芬</span>
        <!-- <input type="text"> -->
        <span>...</span>
      </div>
      <div class="content">
        <div class="ayff" v-for="(dh,index) in content.content" :key="index">
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
        </div>
      </div>
      <div class="input-content">
        <i class="voice"></i>
        <textarea></textarea>
        <i class="smaile"></i>
        <i class="add"></i>
      </div>
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
      data: null,
      length:null,
    };
  },
  created() {
    axios.get("../../memory.json").then(data => {
      this.data = data.data;
      this.length = data.data.length;
      console.log(this.data);
      console.log(this.length);
    });
    // console.log(this.data)
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
}
.memory {
  position: fixed;
  top: 10%;
  left: 10%;
  // margin-left: -350px;
  width: 300px;
  height: 550px;
  // opacity: .7;
  // z-index: 10000;
  border-radius: 4px;
  background-color: #ededed;
  .head {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 3px 1px;
    border-bottom: #e5e5e5 solid 1px;
  }
  .content {
    height: 480px;
    overflow-y: scroll;
    .ayff {
      .ff {
        width: 100%;
        padding: 2px;
        margin-top: 4px;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-start;
        img {
          width: 30px;
          height: 30px;
          margin-left: 3px;
        }
        ._content {
          min-height: 30px;
          line-height: 30px;
          background-color: #fff;
          margin-left: 4px;
          border-radius: 3px;
          padding: 0 4px;
          max-width: 70%;
          text-align: left;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
      .ay {
        width: 100%;
        padding: 2px;
        margin-top: 4px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        img {
          width: 30px;
          height: 30px;
          margin-right: 4px;
        }
        ._content {
          min-height: 30px;
          line-height: 30px;
          background-color: #95EC69;
          margin-right: 4px;
          border-radius: 3px;
          padding: 0 4px;
          min-height: 30px;
          line-height: 30px;
          margin-left: 4px;
          border-radius: 3px;
          padding: 0 4px;
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
  span {
    line-height: 21px;
  }
  .input-content {
    display: flex;
    position: absolute;
    bottom: 0;
    padding: 6px 4px;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
    background-color: #f7f7f7;
    border-radius: 0 0 5px 5px;
    i {
      margin: 0 4px;
    }
    .voice {
      width: 25px;
      height: 25px;
      background: url(../assets/voice.svg);
      background-size: 25px 25px;
    }
    .smaile {
      width: 25px;
      height: 25px;
      background: url(../assets/smile.svg);
      background-size: 25px 25px;
    }
    .add {
      width: 22px;
      height: 22px;
      background: url(../assets/add.svg);
      background-size: 22px 22px;
    }
    textarea {
      border: none;
      border-radius: 5px;
      margin: 0 5px;
      min-height: 30px;
      resize: none;
      // line-height: 30px;
      width: 180px;
    }
  }
}
</style>>