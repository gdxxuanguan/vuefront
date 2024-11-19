<script setup>
import {reactive, ref} from "vue";
const fromData=reactive({});
const checkCodeUrl="api/checkCode"
</script>

<template>
<div class="login-body">
  <div class="login-panel">
    <el-form :model="fromData">
      <div class="login-title">登录</div>
      <el-form-item label="">
        <el-input placeholder="账号"
                  v-model="fromData.account"/>
      </el-form-item>

      <el-form-item label="">
        <el-input placeholder="密码"
                  v-model="fromData.password"/>
      </el-form-item>

      <el-form-item label="">
        <div class="check-code-panel">
          <el-input placeholder="验证码"
                    v-model="fromData.checkCode"/>
          <img :src="checkCodeUrl" class="check-code">
        </div>
      </el-form-item>

      <el-form-item label="">
        <el-checkbox placeholder="密码"
                  v-model="fromData.remerberMe"
                  :label="true">记住账号密码
        </el-checkbox>
      </el-form-item>

      <el-button type="primary" :style="{width:'100%'}">登录</el-button>

    </el-form>
  </div>

</div>
</template>

<style lang="scss">

.login-body{

  width: 100%;
  height: calc(100vh);
  background-size: cover;
  background-position: center;
  background-image: url(../assets/gq.png);
  .login-panel{
    float: right;
    margin-right: 100px;
    padding: 20px;
    margin-top: 100px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #ddd;
    width: 350px;
    background: rgb(255,255,255,0.7);
  }
  .login-title{
    font-size: 22px;
    text-align: center;
    margin-bottom: 12px;
  }
  .check-code-panel{
    width: 100%;
    display: flex;
    align-items: center;
    .input-panel{
      flex: 1;
      margin-right: 5px;
    }
    .check-code{
      height: 30px;
      cursor: pointer;
    }
  }
}

</style>