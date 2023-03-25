
import styles from "@/styles/Home.module.css";

export default function NextPage() {
  return (
    <>
      <main>
        <div className={styles.main}>
          <div className="grid grid-cols-3">
            <h1>Heading One</h1>
            <h1>Heading Two</h1>
            <h1>Heading Three</h1>
          </div>
        </div>
      </main>
    </>
  );
}
