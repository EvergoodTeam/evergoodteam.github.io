import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { isActiveSidebarItem } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

import { Iconify } from '@site/src/components/Icon';

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  const separator = (level == 1 && className != 'sidebar-intro') ? (<div className='sidebar-category-separator'></div>) : <></>;

  return (
    <>{separator}
      <li
        className={clsx(
          ThemeClassNames.docs.docSidebarItemLink,
          ThemeClassNames.docs.docSidebarItemLinkLevel(level),
          'menu__list-item',
          className,
        )}
        key={label}>
        <Link
          className={clsx(
            'menu__link',
            !isInternalLink && styles.menuExternalLink,
            {
              'menu__link--active': isActive,
            },
          )}
          autoAddBaseUrl={autoAddBaseUrl}
          aria-current={isActive ? 'page' : undefined}
          to={href}
          {...(isInternalLink && {
            onClick: onItemClick ? () => onItemClick(item) : undefined,
          })}
          {...props}>
          <Iconify>{(item.customProps != undefined) ? item.customProps.badge : undefined}</Iconify>
          {label}
          {!isInternalLink && <IconExternalLink />}
        </Link>
      </li></>
  );
}
