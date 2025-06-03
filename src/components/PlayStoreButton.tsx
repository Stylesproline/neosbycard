import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'

const PlayStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                        
                    </svg>
                </div>
                <div>
                    <div className="text-xs">
                        Получить
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        консультацию📱📴
                    </div>
                </div>
            </button>
        </a>
    )
}

export default PlayStoreButton
