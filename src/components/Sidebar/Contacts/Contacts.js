import React from "react";

import { atob } from "abab";

import { Icon } from "@/components/Icon";
import { ICONS } from "@/constants";
import { getContactHref, getIcon } from "@/utils";

import * as styles from "./Contacts.module.scss";

const Contacts = ({ contacts }) => (
  <div className={styles.contacts}>
    <ul className={styles.list}>
      {Object.keys(contacts).map((name) =>
        contacts[name] ? (
          <li className={styles.item} key={name}>
            {name === "email" ? (
              <span
                className={styles.link}
                onClick={() => {
                  window.location.href =
                    "mailto:" + atob(getContactHref(name, contacts[name]));
                }}
              >
                <Icon name={name} icon={getIcon(name)} />
              </span>
            ) : (
              <a
                className={styles.link}
                href={getContactHref(name, contacts[name])}
                target="_blank"
                rel={`noopener noreferrer${name === "mastodon" ? " me" : ""}`}
              >
                <Icon name={name} icon={getIcon(name)} />
              </a>
            )}
          </li>
        ) : null,
      )}
    </ul>
  </div>
);

export default Contacts;
