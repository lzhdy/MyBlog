import {defineStore} from "pinia";
import {Names} from "./nameSpace";


const useThemeStore = defineStore(Names.Theme, {
    state: () => {
        return {
            grey0: "#fff",
            grey1: "#fdfdfd",
            grey2: "#f7f7f7",
            grey3: "#eff2f3",
            grey4: "#ccc",
            grey5: "#999",
            grey6: "#666",
            grey7: "#333",
            grey8: "#222",
            grey9: "#000",

            grey1_a0: "rgba(253,253,253,0)",
            grey1_a3: "rgba(253,253,253,0.3)",
            grey1_a5: "rgba(253,253,253,0.5)",
            grey1_a7: "rgba(253,253,253,0.7)",
            grey2_a0: "rgba(247,247,247,0)",
            grey9_a1: "rgba(0,0,0,0.1)",
            grey9_a5: "rgba(0,0,0,0.5)",

            color_pink_light: "#ffe6fa",
            color_cyan_light: "#e3fdf5",

            color_red: "#e9546b",
            color_pink: "#ed6ea0",
            color_orange: "#ec8c69",
            color_yellow: "#eab700",
            color_green: "#0a7426",
            color_aqua: "#3e999f",
            color_blue: "#38a1db",
            color_purple: "#9d5b8b",
            color_grey: "#869194",

            color_red_a1: "rgba(233,84,107,0.1)",
            color_red_a3: "rgba(233,84,107,0.3)",
            color_pink_a3: "rgba(237,110,160,0.3)",
            color_pink_light_a5: "rgba(255,230,250,0.5)",
            color_pink_light_a3: "rgba(255,230,250,0.3)",
            color_pink_light_a7: "rgba(255,230,250,0.7)",

            body_bg_shadow: "#f7f7f7",
            box_bg_shadow: "rgba(0,0,0,0.1)",
            text_color: "#333",
            header_text_color: "#fff",
            primary_color: "#e9546b",
            nav_bg: "linear-gradient(-225deg, #e3fdf5 0,#ffe6fa 100%)",

            primary_note_border: "#cda0c7",
            primary_note_bg: "#fdf8ff",
            primary_note_text: "#8a51c0",
            primary_note_hover: "#935aca",

            info_note_border: "#8fa4dc",
            info_note_bg: "#f1f9ff",
            info_note_text: "#1d4974",
            info_note_hover: "#1d5fa0",

            success_note_border: "#a3c293",
            success_note_bg: "#fcfff5",
            success_note_text: "#2c662d",
            success_note_hover: "#3b883c",

            warning_note_border: "#c9ba9b",
            warning_note_bg: "#fffbeb",
            warning_note_text: "#947600",
            warning_note_hover: "#ccb045",

            danger_note_border: "#f4b3c1",
            danger_note_bg: "#fff2f5",
            danger_note_text: "#cc0f35",
            danger_note_hover: "#f14668",

        }
    },

    //类似于computed 可以帮我们去修饰我们的值
    getters: {},
    //可以操作异步 和 同步提交state
    actions: {
        darkColor() {
            this.grey0 = "#222";
            this.grey1 = "#21252b";
            this.grey2 = "#363636";
            this.grey3 = "#444";
            this.grey4 = "#666";
            this.grey5 = "#aaa";
            this.grey6 = "#ccc";
            this.grey7 = "#ddd";
            this.grey8 = "#eee";
            this.grey9 = "#f7f7f7";

            this.grey1_a0 = "rgba(34, 34, 34, 0)";
            this.grey1_a3 = "rgba(34, 34, 34, 0.3)";
            this.grey1_a5 = "rgba(34, 34, 34, 0.5)";
            this.grey1_a7 = "rgba(34, 34, 34, 0.7)";
            this.grey2_a0 = "rgba(54, 54, 54, 0)";
            this.grey9_a1 = "rgba(51, 51, 51, 0.1)";

            this.color_pink_light = "#322d31";
            this.color_cyan_light = "#2d3230";

            this.color_red = "rgba(237, 118, 137, 0.9)"
            this.color_pink = "rgba(241, 139, 179, 0.8)"
            this.color_orange = "rgba(240, 163, 135, 0.8)"
            this.color_yellow = "#ffe175"
            this.color_green = "#86c59d"
            this.color_aqua = "#97d3d6"
            this.color_blue = "#9cd0ed"
            this.color_purple = "#cfacc5"
            this.color_grey = "#c3c8ca"

            this.body_bg_shadow = "#000";
            this.box_bg_shadow = "#000";
            this.text_color = "#aaa";
            this.header_text_color = "#f7f7f7";

            this.primary_note_border = "rgba(123, 96, 119, 0.8)";
            this.primary_note_bg = "rgba(50, 49, 50, 0.8)"
            this.primary_note_text = "rgba(161, 116, 205, 0.8)"
            this.primary_note_hover = "rgba(117, 72, 161, 0.8)"

            this.info_note_border = "rgba(85, 98, 132, 0.8)";
            this.info_note_bg = "rgba(48, 49, 50, 0.8)"
            this.info_note_text = "rgba(109, 164, 219, 0.8)"
            this.info_note_hover = "rgba(39, 127, 214, 0.8)"

            this.success_note_border = "rgba(97, 116, 88, 0.8)";
            this.success_note_bg = "rgba(50, 50, 48, 0.8)"
            this.success_note_text = "rgba(128, 200, 129, 0.8)"
            this.success_note_hover = "rgba(41, 95, 42, 0.8)"

            this.warning_note_border = "rgba(120, 111, 93, 0.8)";
            this.warning_note_bg = "rgba(50, 50, 46, 0.8)"
            this.warning_note_text = "rgba(220, 176, 0, 0.8)"
            this.warning_note_hover = "rgba(163, 140, 55, 0.8)"

            this.danger_note_border = "rgba(146, 107, 115, 0.8)";
            this.danger_note_bg = "rgba(50, 48, 48, 0.8)"
            this.danger_note_text = "rgba(239, 38, 79, 0.8)"
            this.danger_note_hover = "rgba(168, 49, 72, 0.8)"
        }
    }
})

export {
    useThemeStore
}
