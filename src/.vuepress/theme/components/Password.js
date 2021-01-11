import Vue from "vue";
export default Vue.extend({
    name: "Password",
    props: {
        page: { type: Boolean, default: false },
    },
    data: () => ({
        password: "",
        hasTried: false,
    }),
    computed: {
        isMainPage() {
            return this.$frontmatter.home === true;
        },
    },
    methods: {
        verify() {
            this.hasTried = false;
            // eslint-disable-next-line vue/require-explicit-emits
            this.$emit("password-verify", this.password);
            void Vue.nextTick().then(() => {
                this.hasTried = true;
            });
        },
    },
});
