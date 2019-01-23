<template lang="pug">
.login-container
  el-form.login-form(autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left")
    .title C4管理后台
    el-form-item(prop="phone")
      el-input(name="phone" type="text" v-model="loginForm.phone" autoComplete="on" placeholder="phone" prefix-icon="el-icon-phone")
    el-form-item(prop="password")
      el-input(name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="password" prefix-icon="el-icon-warning")
    el-form-item
      el-button(type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin") 登录
    .tips
      span(style="margin-right:20px;") phone: {{loginForm.phone}}
      span password: {{loginForm.password}}

</template>

<script>
export default {
	name: "login",
	data() {
		return {
			loginForm: {
				phone: "18637110217",
				password: "aaa111"
			},
			loginRules: {
				phone: [{ required: true, trigger: "blur" }],
				password: [{ required: true, trigger: "blur" }]
			},
			loading: false,
			pwdType: "password"
		};
	},
	methods: {
		showPwd() {
			if (this.pwdType === "password") {
				this.pwdType = "";
			} else {
				this.pwdType = "password";
			}
		},
		handleLogin() {
			this.$refs.loginForm.validate(valid => {
				if (valid) {
					this.loading = true;
					this.loading = false;
					this.$router.push("/");
					this.$store
						.dispatch("login", this.loginForm)
						.then(res => {
							this.loading = false;
							this.$router.push("/");
						})
						.catch(err => {
							console.log("login error");
							console.log(err);
							this.loading = false;
						});
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
@bg: #2d3a4b;
@dark_gray: #889aa4;
@light_gray: #eee;
.login-container {
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: @bg;
	.login-form {
		position: absolute;
		left: 0;
		right: 0;
		width: 520px;
		padding: 35px 35px 15px 35px;
		margin: 120px auto;
	}
	.tips {
		font-size: 14px;
		color: #fff;
		margin-bottom: 10px;
		span {
			&:first-of-type {
				margin-right: 16px;
			}
		}
	}
	.svg-container {
		padding: 6px 5px 6px 15px;
		color: @dark_gray;
		vertical-align: middle;
		width: 30px;
		display: inline-block;
		&_login {
			font-size: 20px;
		}
	}
	.title {
		font-size: 26px;
		font-weight: 400;
		color: @light_gray;
		margin: 0px auto 40px auto;
		text-align: center;
		font-weight: bold;
	}
	.show-pwd {
		position: absolute;
		right: 10px;
		top: 7px;
		font-size: 16px;
		color: @dark_gray;
		cursor: pointer;
		user-select: none;
	}
}
</style>

