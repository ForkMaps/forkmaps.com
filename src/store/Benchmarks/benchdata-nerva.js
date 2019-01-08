const benchData = {
    nerva: [
        {
            make: 'AMD',
            model: 'Opteron 6272',
            cpuFrequency: 2100,
            os: 'Arch',
            sockets: 2,
            miningThreads: 31,
            hashrate: 1600
        },
        {
            make: 'AMD',
            model: 'FX-6300',
            cpuFrequency: 3500,
            sockets: 1,
            miningThreads: 6,
            hashrate: 500
        },
        {
            make: 'AMD',
            model: 'FX-8320',
            cpuFrequency: 3500,
            sockets: 1,
            miningThreads: 6,
            hashrate: 560
        },
        {
            make: 'AMD',
            model: 'FX-8320',
            cpuFrequency: 4800,
            ramFrequency: 1866,
            sockets: 1,
            miningThreads: 7,
            hashrate: 880
        },
        {
            make: 'AMD',
            model: 'Ryzen 5 1500X',
            cpuFrequency: 3500,
            sockets: 1,
            miningThreads: 8,
            hashrate: 987
        },
        {
            make: 'AMD',
            model: 'Ryzen 5 1600',
            cpuFrequency: 3750,
            sockets: 1,
            miningThreads: 12,
            hashrate: 1500
        },
        {
            make: 'AMD',
            model: 'Ryzen 5 1600X',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 6,
            hashrate: 950
        },
        {
            make: 'AMD',
            model: 'Ryzen 5 1600X',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 8,
            hashrate: 1130
        },
        {
            make: 'AMD',
            model: 'Ryzen 5 1600X',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 10,
            hashrate: 1360
        },
        {
            make: 'AMD',
            model: 'Ryzen 5 1600X',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 12,
            hashrate: 1650
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 1700',
            cpuFrequency: 3700,
            sockets: 1,
            miningThreads: 15,
            hashrate: 1600
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 1700',
            cpuFrequency: 3900,
            ramFrequency: 3200,
            sockets: 1,
            miningThreads: 15,
            hashrate: 1650
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 1700',
            cpuFrequency: 3800,
            ramFrequency: 2133,
            os: 'Windows 10',
            sockets: 1,
            miningThreads: 11,
            hashrate: 1630
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 1700',
            cpuFrequency: 3800,
            ramFrequency: 2133,
            os: 'Windows 10',
            sockets: 1,
            miningThreads: 14,
            hashrate: 1700
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 1700X',
            cpuFrequency: 3400,
            sockets: 1,
            miningThreads: 16,
            hashrate: 1600
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 1800X',
            cpuFrequency: 3600,
            sockets: 1,
            miningThreads: 14,
            hashrate: 1450
        },
        {
            make: 'AMD',
            model: 'Ryzen 7 2700X',
            cpuFrequency: 3700,
            sockets: 1,
            miningThreads: 15,
            hashrate: 1700
        },
        {
            make: 'AMD',
            model: 'Threadripper 1950x',
            cpuFrequency: 3400,
            ramFrequency: 2133,
            os: 'Windows 10',
            sockets: 1,
            miningThreads: 1,
            hashrate: 156
        },
        {
            make: 'AMD',
            model: 'Threadripper 1950x',
            cpuFrequency: 3400,
            ramFrequency: 2133,
            os: 'Windows 10',
            sockets: 1,
            miningThreads: 16,
            hashrate: 1400
        },
        {
            make: 'AMD',
            model: 'Threadripper 1950x',
            cpuFrequency: 3700,
            sockets: 1,
            miningThreads: 24,
            hashrate: 3200
        },
        {
            make: 'AMD',
            model: 'Threadripper 1950x',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 32,
            hashrate: 3190
        },
        {
            make: 'Intel',
            model: 'Core 2 Duo P8600',
            cpuFrequency: 2400,
            sockets: 1,
            miningThreads: 2,
            hashrate: 78
        },
        {
            make: 'Intel',
            model: 'Core i3-2120',
            cpuFrequency: 3300,
            sockets: 1,
            miningThreads: 3,
            hashrate: 120
        },
        {
            make: 'Intel',
            model: 'Core i5-2500K',
            cpuFrequency: 3300,
            sockets: 1,
            miningThreads: 4,
            hashrate: 454
        },
        {
            make: 'Intel',
            model: 'Core i5-3570',
            cpuFrequency: 3400,
            sockets: 1,
            miningThreads: 1,
            hashrate: 155
        },
        {
            make: 'Intel',
            model: 'Core i5-3570',
            cpuFrequency: 3400,
            sockets: 1,
            miningThreads: 2,
            hashrate: 300
        },
        {
            make: 'Intel',
            model: 'Core i5-3570',
            cpuFrequency: 3400,
            sockets: 1,
            miningThreads: 3,
            hashrate: 440
        },
        {
            make: 'Intel',
            model: 'Core i5-3570',
            cpuFrequency: 3400,
            sockets: 1,
            miningThreads: 4,
            hashrate: 550
        },
        {
            make: 'Intel',
            model: 'Core i7-3960X',
            cpuFrequency: 4300,
            ramFrequency: 2400,
            sockets: 1,
            miningThreads: 13,
            hashrate: 1550
        },
        {
            make: 'Intel',
            model: 'Core i5-4670K',
            cpuFrequency: 4300,
            os: 'Ubuntu 16.04',
            sockets: 1,
            miningThreads: 3,
            hashrate: 440
        },
        {
            make: 'Intel',
            model: 'Core i5-4670K',
            cpuFrequency: 4300,
            os: 'Ubuntu 16.04',
            sockets: 1,
            miningThreads: 4,
            hashrate: 580
        },
        {
            make: 'Intel',
            model: 'Core i5-4690K',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 4,
            hashrate: 605
        },
        {
            make: 'Intel',
            model: 'Core i7-4790K',
            cpuFrequency: 4800,
            ramFrequency: 1800,
            sockets: 1,
            miningThreads: 7,
            hashrate: 941
        },
        {
            make: 'Intel',
            model: 'Core i5-6400',
            cpuFrequency: 2700,
            sockets: 1,
            miningThreads: 4,
            hashrate: 320
        },
        {
            make: 'Intel',
            model: 'Core i7-6700K',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 5,
            hashrate: 640
        },
        {
            make: 'Intel',
            model: 'Core i7-6950X',
            cpuFrequency: 4400,
            ramFrequency: 3200,
            sockets: 1,
            miningThreads: 19,
            hashrate: 2170
        },
        {
            make: 'Intel',
            model: 'Core i7-8550U',
            cpuFrequency: 1800,
            sockets: 1,
            miningThreads: 7,
            hashrate: 450
        },
        {
            make: 'Intel',
            model: 'Core i7-3770K',
            cpuFrequency: 3500,
            sockets: 1,
            miningThreads: 7,
            hashrate: 750
        },
        {
            make: 'Intel',
            model: 'Core i7-7567U',
            cpuFrequency: 3500,
            os: 'macOS',
            sockets: 1,
            miningThreads: 2,
            hashrate: 266
        },
        {
            make: 'Intel',
            model: 'Core i7-6820HQ',
            cpuFrequency: 2700,
            os: 'macOS',
            sockets: 1,
            miningThreads: 4,
            hashrate: 430
        },
        {
            make: 'Intel',
            model: 'Core i7-6820HK',
            cpuFrequency: 4000,
            sockets: 1,
            miningThreads: 7,
            hashrate: 678
        },
        {
            make: 'Intel',
            model: 'Core i7-7700K',
            cpuFrequency: 4200,
            sockets: 1,
            miningThreads: 6,
            hashrate: 800
        },
        {
            make: 'Intel',
            model: 'Core i7-7800X',
            cpuFrequency: 3500,
            sockets: 1,
            miningThreads: 8,
            hashrate: 1200
        },
        {
            make: 'Intel',
            model: 'Core i7-7820X',
            cpuFrequency: 3600,
            sockets: 1,
            miningThreads: 11,
            hashrate: 1500
        },
        {
            make: 'Intel',
            model: 'Core m3-6Y30',
            cpuFrequency: 900,
            sockets: 1,
            miningThreads: 4,
            hashrate: 200
        },
        {
            make: 'Intel',
            model: 'Xeon E6520',
            cpuFrequency: 2400,
            sockets: 2,
            miningThreads: 7,
            hashrate: 560
        },
        {
            make: 'Intel',
            model: 'Xeon E5620',
            cpuFrequency: 2400,
            sockets: 2,
            hashrate: 965
        },
        {
            make: 'Intel',
            model: 'Xeon E5645',
            cpuFrequency: 2400,
            sockets: 2,
            miningThreads: 23,
            hashrate: 1040
        },
        {
            make: 'Intel',
            model: 'Xeon E5645',
            cpuFrequency: 2400,
            sockets: 2,
            miningThreads: 18,
            hashrate: 1000
        },
        {
            make: 'Intel',
            model: 'Xeon X5650',
            cpuFrequency: 2900,
            sockets: 2,
            miningThreads: 24,
            hashrate: 1200
        },
        {
            make: 'Intel',
            model: 'Xeon X5660',
            cpuFrequency: 2800,
            sockets: 2,
            miningThreads: 22,
            hashrate: 1180
        },
        {
            make: 'Intel',
            model: 'Xeon X5670',
            cpuFrequency: 3750,
            sockets: 1,
            miningThreads: 6,
            hashrate: 600
        },
        {
            make: 'Intel',
            model: 'Xeon E3-1220 V3',
            cpuFrequency: 3100,
            sockets: 1,
            miningThreads: 4,
            hashrate: 440
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2440',
            cpuFrequency: 2400,
            sockets: 1,
            miningThreads: 12,
            hashrate: 975
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2648L',
            cpuFrequency: 1800,
            ramFrequency: 1333,
            os: 'Ubuntu 16',
            sockets: 2,
            miningThreads: 36,
            hashrate: 1650
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2648L',
            cpuFrequency: 1800,
            os: 'Ubuntu',
            sockets: 2,
            miningThreads: 28,
            hashrate: 1450
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2650L',
            cpuFrequency: 1800,
            os: 'Ubuntu',
            sockets: 2,
            miningThreads: 28,
            hashrate: 1550
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2660',
            cpuFrequency: 2200,
            sockets: 2,
            miningThreads: 32,
            hashrate: 2300
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2690',
            cpuFrequency: 2900,
            sockets: 2,
            miningThreads: 25,
            hashrate: 2300
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2620 V2',
            cpuFrequency: 2100,
            ramFrequency: 1333,
            sockets: 2,
            miningThreads: 24,
            hashrate: 1720
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2670 V2',
            cpuFrequency: 2500,
            ramFrequency: 1866,
            os: 'Ubuntu 17 LXC Proxmox 5.2',
            sockets: 2,
            miningThreads: 30,
            hashrate: 2580
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2680 V2',
            cpuFrequency: 2800,
            sockets: 2,
            miningThreads: 32,
            hashrate: 2700
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2680 V2',
            cpuFrequency: 2800,
            sockets: 2,
            miningThreads: 40,
            hashrate: 3300
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2687W V2',
            cpuFrequency: 3400,
            sockets: 2,
            miningThreads: 27,
            hashrate: 2740
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2620 V3',
            cpuFrequency: 2400,
            sockets: 2,
            miningThreads: 24,
            hashrate: 2080,
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2673 V3',
            cpuFrequency: 2400,
            sockets: 2,
            miningThreads: 16,
            hashrate: 1400,
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2666 V3',
            cpuFrequency: 2900,
            sockets: 2,
            miningThreads: 36,
            hashrate: 3100
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2620 V4',
            cpuFrequency: 2100,
            sockets: 2,
            miningThreads: 15,
            hashrate: 1020
        },
        {
            make: 'Intel',
            model: 'Xeon E5-2620 V4',
            cpuFrequency: 2100,
            sockets: 2,
            miningThreads: 26,
            hashrate: 1020
        },
        {
            make: 'Intel',
            model: 'Xeon E5-4627 V2',
            cpuFrequency: 3300,
            sockets: 4,
            miningThreads: 31,
            hashrate: 3300
        },
        {
            make: 'Intel',
            model: 'Xeon E7-2830',
            cpuFrequency: 2130,
            os: 'Ubuntu',
            sockets: 2,
            miningThreads: 28,
            hashrate: 1700
        },
        {
            make: 'Broadcom',
            model: 'BCM2837',
            cpuFrequency: 1200,
            sockets: 1,
            miningThreads: 4,
            hashrate: 14
        },
        {
            make: 'Qualcomm',
            model: 'Snapdragon 835',
            cpuFrequency: 2350,
            sockets: 1,
            hashrate: 108
        },
        {
            make: 'Rockchip',
            model: 'RK3328',
            cpuFrequency: 1400,
            sockets: 1,
            hashrate: 32
        }
    ]
};
