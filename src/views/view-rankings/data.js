export const styles = {
  form_main: {
    backgroundColor: "#CACACA"
  },
  form_title_Top: {
    width: '100%',
    padding: "15px",
  },
  form_text_title: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "29px",
    textAlign: "center",
    margin: "0px",
    color: "#000"
  },
  form_day: {
    backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "space-around",
    color: "#000"
  },
  form_text_day: {
    margin: "0px",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19px",
    textAlign: "center",
    marginTop: "10px"
  },
  form_icon_day: {
    fontSize: "25px",
  },
  form_text_title_bottom: {
    margin: "10px 0px 0px 0px",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    textAlign: "center",
    padding: "5px",
    color: "#000"
  },
  form_table_bottom: {
    backgroundColor: "#6B6B6B",
    display: "flex",
    justifyContent: "space-around",
  },
  form_text_table_bottom: {
    margin: "0px 0px 0px 0px",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "21px",
    textAlign: "center",
    padding: "5px",
    color: "white",
  },
  form_button_icon_bottom: {
    backgroundColor: "#8E8E8E",
    padding: "0px 0px 0px 0px"
  },
  form_my_rewatch: {
    display: "flex"
  },
  form_text_my_rewatch: {
    marginLeft: "90px"
  },
  form_textTop_my_rewatch: {
    margin: "0px ",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "17px",
    textAlign: "center",
    padding: "5px",
    color: "#000"
  },
  form_textBottom_my_rewatch: {
    margin: "0px ",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19px",
    textAlign: "center",
    padding: "5px",
    color: "#000"
  },
  icon_bottom: {
    fontSize: "40px",
    padding: "5px",
    marginLeft: "20px"
  },
  form_icon_bottom: {
    display: "flex",
    alignItems: "flex-end",
    color: "#000"
  },
  form_table: {
    height: "500px"
  },
  form_footer: {
    backgroundColor: "#CACACA"
  },

  custom_left_slick_arrow: {
    width: "25px",
    height: "25px",
    fontSize: "25px",
    color: "#000",
    zIndex: "1",
    left: "10px"
  },
  custom_right_slick_arrow: {
    width: "25px",
    height: "25px",
    fontSize: "25px",
    color: "#000",
    zIndex: "1"
  },
  text_slider: {
    textAlign: "center",
    height: "40px",
    lineHeight: "40px",
    background: "#D9D9D9",
    overflow: "hidden",
  }
};
export const columns = [
  {
    title: '#',
    dataIndex: 'rankList',
    key: 'number',
    width: 50,
  },
  {
    title: 'User ID',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Fantasy point',
    dataIndex: 'userPoint',
    key: 'userPoint'
  }];