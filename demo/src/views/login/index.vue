<template>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="register" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
</template>
<script>
export default {
    data () {
              var validatePass = (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入密码'));
                    } else {
                        callback();
                    }
                };
                var validatePass2 = (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请再次输入密码'));
                    } else if (value !== this.ruleForm.pass) {
                        callback(new Error('两次输入密码不一致!'));
                    } else {
                        callback();
                    }
                };
                var username =(rule,value,callback)=>{
                  if(value===''){
                    callback('用户名不能为空')
                  }else{
                    callback()
                  }
                }
        return {
            ruleForm: {
                username:'',
                pass: '',
            },
            rules: {
              pass: [
                { validator: validatePass, trigger: 'blur' }
              ],
              username:[{validator:username,trigger:'blur'}]
            }
          };
        },
            methods: {
                submitForm() {
                    this.$refs.register.validate((valid) => {
                    if (valid) {
                        this.api.user.login({username:this.ruleForm.username,password:this.ruleForm.pass}).then(res=>{
                          if(res.data.code===1){
                            this.$message({
                                message: '恭喜你，登录成功',
                                type: 'success'
                            });
                            console.log(res.data)
                            window.localStorage.setItem('token',res.data.token)
                            this.$router.replace('/music');
                          }else{
                            this.$message.error(res.data.message);
                          }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                    });
                }
            }
    }
</script>
<style lang="stylus" scoped>
    .demo-ruleForm{
      width 100%
      height 300px
      margin 0 auto
    }
</style>