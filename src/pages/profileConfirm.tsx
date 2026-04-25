import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileConfirm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
const { name, barcode } = location.state;

const information = {
  name: name,
  barcode: barcode,
  tg_user: "@arself",
  lang: "Язык",
};
  return (
    <div style={styles.container}>
      {/* Header */}
        <div style={styles.header}>
        <div style={styles.backBtnBg}>
            <button style={styles.backBtn} onClick={()=> {navigate("/")}}>‹</button>
        </div>
        <span style={styles.headerTitle}>
            Astana <span style={{ color: "#0088FF" }}>IT</span> University
        </span>
        <img
            src="./src/assets/profile_confirmation/Language.png"
            alt="language"
            style={styles.flagIcon}
        />
        </div>

      {/* Card */}
      <div style={styles.card}>
        <h2 style={styles.title}>Почти готово!</h2>
        <p style={styles.subtitle}>
          Ваш профиль уже заполнен — проверьте информацию ниже. Мы автоматически
          синхронизировали ваше имя, BarCode, Telegram
        </p>

        <div style={styles.fieldsWrapper}>
          {/* Row 1: Name 70% | BarCode 30% */}
          <div style={styles.row}>
            <div style={{ ...styles.field, flex: 6 }}>
              <span style={styles.label}>Name</span>
              <span style={styles.value}>{information.name}</span>
              <img
                src="./src/assets/profile_confirmation/Profile.png"
                alt=""
                style={styles.nameImage}
              />
            </div>
            <div style={{ ...styles.field, flex: 4, backgroundColor: "#79c0ff" }}>
              <span style={ {...styles.label, color:"#dfe0e4"}}>BarCode</span>
              <span style={styles.valueBlue}>{information.barcode}</span>
            </div>
          </div>

          {/* Row 2: Tg user 30% | Language 70% */}
          <div style={styles.row}>
            <div style={{ ...styles.field, flex: 4, backgroundColor: "#79c0ff" }}>
              <span style={ {...styles.label, color:"#dfe0e4"}}>Tg user</span>
              <span style={styles.valueBlue}>{information.tg_user}</span>
            </div>
            <div style={{ ...styles.field, ...styles.langField, flex: 6 }}>
              <span style={styles.value}>{information.lang}</span>
              <img
                src="./src/assets/profile_confirmation/Info.png"
                alt=""
                style={styles.globeBlob}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <button style={styles.primaryBtn}>Все верно, продолжить</button>
        <button style={styles.secondaryBtn}>Редактировать данные</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fafafa",
    minHeight: "110vh",
    fontFamily: "'Lato', sans-serif",
  },
  header: {
  width: "100%",
  maxWidth: 390,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  backgroundColor: "transparent",  // светло-серый как на фото
  marginTop: 10,
  marginBottom: 20,
},
backBtnBg: {
  width: 40,
  height: 40,
  background: "#fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
},
backBtn: {
  background: "none",
  border: "none",
  fontSize: 22,
  color: "#323232",
  cursor: "pointer",
  padding: 0,
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
headerTitle: {
  fontSize: 12,
  fontWeight: 600,
  color: "#080808",
},
flagIcon: {
  width: 36,
  height: 36,
  borderRadius: "50%",
  objectFit: "cover",
},
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: "28px 24px",
    maxWidth: 360,
    width: "90%",
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    color: "#080808",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    width: '100%',
    fontSize: 16,
    color: "#474747",
    textAlign: "center",
    lineHeight: 1.5,
    marginBottom: 24,
  },
  fieldsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  field: {
    backgroundColor: "#f0f6ff",
    borderRadius: 16,
    padding: "14px 16px",
    position: "relative",
    overflow: "hidden",
    minHeight: 90,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 13,
    color: "#323232",
    fontWeight: 500,
  },
  value: {
    fontSize: 16,
    fontWeight: 700,
    color: "#080808",
  },
  valueBlue: {
    fontSize: 16,
    fontWeight: 700,
    color: "#f5f5f5",
  },
  nameImage: {
    position: "absolute",
    right: 0,
    bottom: -10,
    width: 80,
    height: 100,
  },
  langField: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  globeBlob: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 75,
    height: 75,
  },
  primaryBtn: {
    width: "100%",
    backgroundColor: "#0088ff",
    color: "#fff",
    border: "none",
    borderRadius: 50,
    fontSize: 16,
    fontWeight: 300,
    cursor: "pointer",
    marginBottom: 12,
    height: "48px"
  },
  secondaryBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#ecedf0",
    color: "#374151",
    border: "none",
    borderRadius: 50,
    fontSize: 15,
    fontWeight: 300,
    cursor: "pointer",
    height: "48px"
  },
};

export default ProfileConfirm;